import { JSX } from "react";
import { Trans } from "next-i18next";

type TTextProps = {
  i18nKey: string;
  ns?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

const components = {
  bold: <strong />,
  italic: <em />,
  underline: <u />,
  strike: <s />,
};

export const TText: React.FC<TTextProps> = ({ i18nKey, as: Tag = "span", className, ns }) => {
  return (
    <Tag className={className}>
      <Trans i18nKey={i18nKey} ns={ns} components={components} />
    </Tag>
  );
};