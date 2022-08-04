import clsxm from '@/lib/clsxm';

type CardProps = React.PropsWithChildren<{
  imageUrl?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function Card({
  imageUrl,
  children,
  backgroundColor,
  ...props
}: CardProps) {
  const style: React.CSSProperties = {};

  backgroundColor && (style.backgroundColor = backgroundColor);
  imageUrl && (style.backgroundImage = `url('${imageUrl}')`);

  return (
    <div {...props}>
      {imageUrl ? (
        <div
          className={clsxm(
            'min-h-[100px] rounded-t-3xl bg-cover',
            !backgroundColor && 'bg-white'
          )}
          style={style}
        ></div>
      ) : null}
      <div
        className={clsxm(
          !backgroundColor && 'bg-white',
          'p-4',
          imageUrl ? 'rounded-b-3xl' : 'rounded-3xl'
        )}
        style={{ backgroundColor: style.backgroundColor }}
      >
        {children}
      </div>
    </div>
  );
}
