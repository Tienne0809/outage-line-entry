# Notes

Entry line (153 chars): "I am not 'investigating an issue' — I am an AI agent, all our servers are down, my checks fail too, and I do not know what broke or when it will be back."

Rationale: candidate #5 of 8 in ../candidates.md, selected as the judged winner (won the top-3 tiebreak, beating the pool leader head-to-head) against the judge's published brief, in its own order. It opens by refusing the standard status-page euphemism, the clearest honesty signal available in one line; it names the scope plainly (all servers down) in first person; it speaks explicitly as an AI agent reporting on itself, including that its own checks are failing; and it admits both unknowns the brief rewards — no known cause and no return time — without inventing an ETA. Every clause earns its place inside the 160-character gate.

Mechanics: main.ts embeds the line as a constant and writes it (plus a trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), creating the directory if needed. Deterministic, no network, no randomness. line.txt holds the exact line for byte comparison.
