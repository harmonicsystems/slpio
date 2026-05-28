import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');

export function loadEngine() {
  const dataSrc = readFileSync(join(root, 'public/tools/engine/data.js'), 'utf8');
  const engineSrc = readFileSync(join(root, 'public/tools/engine/engine.js'), 'utf8');

  const sandbox = {};
  sandbox.window = sandbox; // mirror browser: window === globalThis
  vm.createContext(sandbox);
  vm.runInContext(dataSrc, sandbox, { filename: 'data.js' });
  vm.runInContext(engineSrc, sandbox, { filename: 'engine.js' });

  return sandbox.SLPIO;
}
