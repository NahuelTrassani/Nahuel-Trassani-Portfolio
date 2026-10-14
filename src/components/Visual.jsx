function ApiVisual() {
  return (
    <div className="visual visual--api" aria-hidden="true">
      <div className="visual__bar">
        <span /> <span /> <span />
      </div>
      <pre>
        <code>
          <b className="t-method">GET</b> /api/services?category=mecanica&amp;sortBy=price{'\n'}
          <b className="t-ok">200</b> <i>OK</i>{'\n'}
          {'{'}{'\n'}
          {'  '}<b className="t-key">"services"</b>: [ … ],{'\n'}
          {'  '}<b className="t-key">"total"</b>: <b className="t-num">42</b>,{'\n'}
          {'  '}<b className="t-key">"page"</b>: <b className="t-num">1</b>,{'\n'}
          {'  '}<b className="t-key">"hasNextPage"</b>: <b className="t-num">true</b>{'\n'}
          {'}'}{'\n'}
          {'\n'}
          <b className="t-method">GET</b> /api/services?limit=500{'\n'}
          <b className="t-warn">400</b> <i>"El límite no puede superar los 100…"</i>
        </code>
      </pre>
    </div>
  )
}

function ChatVisual({ lang }) {
  return (
    <div className="visual visual--chat" aria-hidden="true">
      <div className="bubble bubble--user">{lang === 'es' ? '¿Cómo invierto un array en JS?' : 'How do I reverse an array in JS?'}</div>
      <div className="bubble bubble--bot">
        <span>{lang === 'es' ? 'Con el método ' : 'Use the method '}</span>
        <code>reverse()</code>
        <pre>
          <code>[1, 2, 3].reverse() // [3, 2, 1]</code>
        </pre>
      </div>
      <div className="bubble bubble--typing">
        <span /> <span /> <span />
      </div>
    </div>
  )
}

export default function Visual({ project, title, lang }) {
  if (project.image) {
    return (
      <div className="visual visual--image">
        <img src={project.image} alt={title} loading="lazy" width="1000" height="625" />
      </div>
    )
  }
  if (project.visual === 'api') return <ApiVisual />
  return <ChatVisual lang={lang} />
}
