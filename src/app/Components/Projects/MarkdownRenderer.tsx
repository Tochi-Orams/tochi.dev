"use client";

import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

/**
 * Component to render markdown content with proper HTML support
 * Handles headings, lists, bold text, and spacing
 */
const MarkdownRenderer: FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        components={{
          // Paragraphs with proper spacing
          p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,

          // Headings with spacing
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-4 mt-8 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mb-4 mt-8 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-3 mt-6 first:mt-0">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mb-3 mt-5 first:mt-0">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-base font-semibold mb-2 mt-4 first:mt-0">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-sm font-semibold mb-2 mt-4 first:mt-0">
              {children}
            </h6>
          ),

          // Unordered lists with proper spacing
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-6 mb-4 space-y-2">
              {children}
            </ul>
          ),

          // Ordered lists with proper spacing
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 mb-4 space-y-2">
              {children}
            </ol>
          ),

          // List items
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,

          // Strong/bold text
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),

          // Emphasis/italic
          em: ({ children }) => <em>{children}</em>,

          // Line breaks
          br: () => <br className="my-2" />,

          // Code blocks
          code: ({ children, className }) => {
            const isInline = !className;
            return isInline ? (
              <code className="bg-white/20 px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className="block bg-white/10 p-4 rounded mb-4 overflow-x-auto font-mono text-sm">
                {children}
              </code>
            );
          },

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-white/30 pl-4 italic my-4">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
