---
title: Voice & Resonance
description: Voice therapy documentation, vocal hygiene education, and LLM considerations for voice work.
icon: ph-duotone ph-microphone
order: 4
---

Voice therapy involves acoustic, physiological, and behavioral dimensions. LLMs can help with documentation and patient education, but interpreting acoustic data, laryngoscopic findings, or vocal quality remains clinician territory.

## LLM Strengths in This Domain

- Structuring voice therapy session notes with pre/post measurements
- Drafting vocal hygiene education handouts for different populations
- Organizing pre/post treatment voice measures into report format
- Generating patient-friendly explanations of voice disorders
- Creating vocal hygiene checklists and self-monitoring logs
- Structuring referral letters to ENT/laryngology

## LLM Limitations

- Cannot interpret acoustic measures (f0, jitter, shimmer, HNR)
- Cannot assess vocal quality from descriptions (GRBAS, CAPE-V ratings are clinician judgments)
- May not understand the nuances of different voice therapy approaches (LSVT LOUD, resonant voice, flow phonation, semi-occluded vocal tract exercises)
- Cannot replace stroboscopic or laryngoscopic interpretation
- May generate anatomy/physiology claims that need verification
- Cannot distinguish between functional, structural, and neurological voice disorders from a description

## Prompt Templates

### Voice Therapy Session Note

```
I am an SLP providing voice therapy. Here are my raw session notes (no patient identifiers). Organize into: target behavior, techniques used, pre-session and post-session voice measures (if I provided them), patient compliance and self-monitoring observations, and plan. Do not add measures or findings I did not provide. Do not interpret acoustic data.
```

### Vocal Hygiene Handout

```
Create a vocal hygiene handout for a middle school teacher diagnosed with vocal nodules. Include: what vocal hygiene means, 8-10 specific recommendations (hydration, voice rest, amplification, reduce throat clearing, etc.), and 3-4 things to avoid. Keep the tone warm and practical. This is not a lecture; it's a support document. Avoid excessive medical terminology.
```

### ENT Referral Letter Structure

```
I am an SLP referring a patient to ENT for laryngeal evaluation (no patient identifiers). Here is the clinical information I need to include: [presenting complaint, voice quality observations, functional impact, relevant history, and what I'm asking ENT to evaluate]. Help me organize this into a clear, professional referral letter. Do not add clinical details I didn't provide.
```

## Goal Progressions

### Weak → Strong: Vocal Hygiene

**Before:** "Patient will demonstrate good vocal hygiene."

*What counts as "good"? Which behaviors? How measured?*

**After:** "Patient will implement 5 of 7 targeted vocal hygiene strategies (hydration log, voice rest periods, elimination of habitual throat clearing, use of amplification during instruction, reduced phonation during noisy environments) as documented by daily self-monitoring checklist across 2 consecutive weeks."

### Weak → Strong: Voice Quality

**Before:** "Patient will improve voice quality."

*Which parameter? From what baseline? What's the measurement?*

**After:** "Patient will produce sustained vowel phonation with reduced breathiness (CAPE-V breathiness rating decrease from baseline 45/100 to below 25/100) as measured by SLP perceptual rating across 3 consecutive sessions."

### Weak → Strong: Resonant Voice

**Before:** "Patient will use better resonance during speech."

*"Better" is not measurable. Which technique? In what context?*

**After:** "During structured conversation tasks, patient will maintain forward resonant voice placement with minimal effort (self-rated 2/5 or below on effort scale) for 5+ consecutive minutes in 3 of 4 therapy sessions."

## Before & After: Session Documentation

### Raw Notes
> did resonant voice exercises today, humming to words to phrases, she's getting the feel of it during hum but loses placement when she goes to conversation, voice sounded clearer during structured tasks, CAPE-V roughness maybe 20 today vs 35 at eval, she's drinking more water but still talks over kids at recess, needs to keep working on voice rest during lunch

### Structured Output
- **Target:** Forward resonant voice placement; carry-over from structured tasks to conversation
- **Techniques:** Resonant voice therapy progression: humming → single words → phrases
- **Performance:** Maintained resonant placement during humming and word-level production. Partial loss of placement at conversational level.
- **Voice Quality:** CAPE-V roughness: ~20/100 (compared to evaluation baseline: 35/100). Perceptual improvement noted during structured tasks.
- **Vocal Hygiene Compliance:** Increased water intake reported. Continued loud voice use during unstructured school activities (recess). Voice rest during lunch not yet consistent.
- **Plan:** Continue resonant voice progression to sentence and reading levels. Address competitive voicing in noisy environments. Reinforce voice rest strategies with teacher coordination.

## Related Pages

- [Documentation](/tasks/documentation/) — Note and report templates
- [Communication](/tasks/communication/) — Patient education drafting
- [Medical & Acute Care](/settings/medical-acute/) — Medical documentation context
- [Private Practice](/settings/private-practice/) — Insurance documentation for voice therapy
