import React, { useEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import less from 'react-syntax-highlighter/dist/cjs/languages/prism/less';
import sass from 'react-syntax-highlighter/dist/cjs/languages/prism/sass';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';

const CodeBlock = (props: any) => {
  useEffect(() => {
    SyntaxHighlighter.registerLanguage('javascript', javascript);
    SyntaxHighlighter.registerLanguage('java', java);
    SyntaxHighlighter.registerLanguage('typescript', typescript);
    SyntaxHighlighter.registerLanguage('css', css);
    SyntaxHighlighter.registerLanguage('less', less);
    SyntaxHighlighter.registerLanguage('sass', sass);
    SyntaxHighlighter.registerLanguage('jsx', jsx);
    SyntaxHighlighter.registerLanguage('tsx', tsx);
  }, []);

  return (
    <div>
      <SyntaxHighlighter language={props.language}>
        {props.value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
