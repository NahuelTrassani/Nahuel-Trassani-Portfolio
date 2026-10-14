const N = 5
const CELL = 24

export default function Mark() {
  const cells = []
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const radius = (col / (N - 1)) * (CELL / 2 - 3)
      cells.push(
        <rect
          key={`${row}-${col}`}
          className="mark__cell"
          x={col * CELL + 3}
          y={row * CELL + 3}
          width={CELL - 6}
          height={CELL - 6}
          rx={radius}
          style={{
            '--d': `${(row + col) * 0.12}s`,
            '--c': `color-mix(in oklab, var(--accent) ${100 - col * 22}%, var(--accent-2))`,
          }}
        />,
      )
    }
  }

  return (
    <svg className="mark" viewBox={`0 0 ${N * CELL} ${N * CELL}`} role="img" aria-label="Legacy → moderno">
      {cells}
    </svg>
  )
}
