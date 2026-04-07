# PDF Build Instructions — Agent Constitution

## Prerequisites

Node.js (v18+)

## Generate PDF

```bash
cd agent-constitution
npx md-to-pdf AGENT-CONSTITUTION.md --config-file pdf.config.cjs
```

Output: `AGENT-CONSTITUTION.pdf` (same directory)

## Notes

- Source: `AGENT-CONSTITUTION.md` — published as-is (both .md and .pdf are canonical)
- Output: `AGENT-CONSTITUTION.pdf` — formal published artifact, DOI target
- Style: `pdf.config.js` — constitution typography (serif, formal layout)
- Unlike the Whitepaper, the .md source is not hidden in `src/` — it is published directly
