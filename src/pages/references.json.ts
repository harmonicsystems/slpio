import references from '../data/references.json';

export async function GET() {
  return new Response(JSON.stringify(references), {
    headers: { 'Content-Type': 'application/json' },
  });
}
