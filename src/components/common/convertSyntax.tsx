import axios from "axios";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";


export interface Props {
  data?: string,
  url?: string,
  language?: string,
  slim?: boolean
}

export const ConvertSyntax = ({ data, url, slim, language = "typescript" }: Props) => {
  const [cardData, setCardData] = React.useState<string>();

  const readFile = async (u: string): Promise<void> => {
    const response = await axios.get<string>(u);
    setCardData(response.data);
  };

  React.useEffect(() => {
    if (data) {
      setCardData(data);
    } else if (url) {
      readFile(url);
    } else {
      setCardData("No information");
    }
    return () => { };
  }, [url, data]);

  return <>
    {/* <CopyButton value={cardData} /> */}
    {slim && <div>
      <SyntaxHighlighter language={language} showLineNumbers customStyle={{ margin: 0 }}>{cardData}</SyntaxHighlighter>
    </div>}
    {!slim && <SyntaxHighlighter language={language} showLineNumbers>{cardData}</SyntaxHighlighter>}

  </>
}
