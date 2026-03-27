import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

function highlightCode(code: string, language: string): React.ReactNode[] {
  if (language === 'javascript' || language === 'typescript' || language === 'js' || language === 'ts') {
    const lines = code.split('\n');
    return lines.map((line, i) => (
      <span key={i}>
        {highlightJSLine(line)}
        {i < lines.length - 1 ? '\n' : ''}
      </span>
    ));
  }
  if (language === 'bash' || language === 'shell') {
    const lines = code.split('\n');
    return lines.map((line, i) => (
      <span key={i}>
        {highlightBashLine(line)}
        {i < lines.length - 1 ? '\n' : ''}
      </span>
    ));
  }
  return [<span key="plain" style={{ color: '#e6edf3' }}>{code}</span>];
}

function highlightBashLine(line: string): React.ReactNode {
  if (line.startsWith('#')) {
    return <span style={{ color: '#8b949e' }}>{line}</span>;
  }
  // Color $ prompts
  if (line.startsWith('$')) {
    return (
      <>
        <span style={{ color: '#8b949e' }}>$ </span>
        <span style={{ color: '#e6edf3' }}>{line.slice(2)}</span>
      </>
    );
  }
  // npm/pip/go commands
  const parts = line.split(/(\s+)/);
  if (parts[0] === 'npm' || parts[0] === 'pip' || parts[0] === 'go' || parts[0] === 'composer') {
    return (
      <>
        <span style={{ color: '#d2a8ff' }}>{parts[0]}</span>
        <span style={{ color: '#e6edf3' }}>{parts.slice(1).join('')}</span>
      </>
    );
  }
  return <span style={{ color: '#e6edf3' }}>{line}</span>;
}

function highlightJSLine(line: string): React.ReactNode {
  // Full line comment
  if (line.trimStart().startsWith('//')) {
    return <span style={{ color: '#8b949e' }}>{line}</span>;
  }

  const tokens: React.ReactNode[] = [];
  let remaining = line;
  let keyIdx = 0;

  const keywords = ['const', 'let', 'var', 'await', 'new', 'return', 'import', 'from', 'require', 'async', 'function', 'class', 'if', 'else'];
  const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`);

  while (remaining.length > 0) {
    // String (single or double quoted, or template literal)
    const strMatch = remaining.match(/^(['"`])((?:[^\\]|\\.)*?)\1/);
    if (strMatch) {
      tokens.push(
        <span key={keyIdx++} style={{ color: '#a5d6ff' }}>{strMatch[0]}</span>
      );
      remaining = remaining.slice(strMatch[0].length);
      continue;
    }

    // Inline comment
    const commentMatch = remaining.match(/^\/\/.*/);
    if (commentMatch) {
      tokens.push(
        <span key={keyIdx++} style={{ color: '#8b949e' }}>{commentMatch[0]}</span>
      );
      remaining = remaining.slice(commentMatch[0].length);
      continue;
    }

    // Number
    const numMatch = remaining.match(/^\d+/);
    if (numMatch) {
      tokens.push(
        <span key={keyIdx++} style={{ color: '#79c0ff' }}>{numMatch[0]}</span>
      );
      remaining = remaining.slice(numMatch[0].length);
      continue;
    }

    // Keyword
    const kwMatch = remaining.match(keywordPattern);
    if (kwMatch && kwMatch.index === 0) {
      tokens.push(
        <span key={keyIdx++} style={{ color: '#ff7b72' }}>{kwMatch[0]}</span>
      );
      remaining = remaining.slice(kwMatch[0].length);
      continue;
    }

    // Word (identifier or function call)
    const wordMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
    if (wordMatch) {
      const word = wordMatch[0];
      const afterWord = remaining.slice(word.length);
      if (afterWord.startsWith('(')) {
        tokens.push(
          <span key={keyIdx++} style={{ color: '#d2a8ff' }}>{word}</span>
        );
      } else if (remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*\s*:/)) {
        tokens.push(
          <span key={keyIdx++} style={{ color: '#ffa657' }}>{word}</span>
        );
      } else {
        tokens.push(
          <span key={keyIdx++} style={{ color: '#e6edf3' }}>{word}</span>
        );
      }
      remaining = remaining.slice(word.length);
      continue;
    }

    // Punctuation / operators
    tokens.push(
      <span key={keyIdx++} style={{ color: '#8b949e' }}>{remaining[0]}</span>
    );
    remaining = remaining.slice(1);
  }

  return <>{tokens}</>;
}

export default function CodeBlock({ code, language = 'javascript', showLineNumbers = false, title }: CodeBlockProps) {
  const lines = code.split('\n');
  const highlighted = highlightCode(code, language);

  return (
    <div className="code-block">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-white/50 text-xs font-medium">{title}</span>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
        </div>
      )}
      <pre>
        {showLineNumbers ? (
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              {lines.map((line, i) => (
                <tr key={i}>
                  <td
                    style={{
                      color: '#4a5568',
                      paddingRight: '1rem',
                      userSelect: 'none',
                      textAlign: 'right',
                      fontSize: '0.75rem',
                      verticalAlign: 'top',
                      paddingTop: '0',
                      paddingBottom: '0',
                      width: '2rem',
                    }}
                  >
                    {i + 1}
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <code>
                      {highlightCode(line, language)}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <code>{highlighted}</code>
        )}
      </pre>
    </div>
  );
}
