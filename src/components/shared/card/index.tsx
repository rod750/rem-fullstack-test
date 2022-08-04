import clsxm from '@/lib/clsxm';

export function Card({
  imageUrl,
  children,
  backgroundColor,
}: {
  imageUrl?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div className='w-100'>
      {imageUrl ? (
        <div
          className={clsxm(
            'rounded-t-3xl',
            backgroundColor ? `bg-[${backgroundColor}]` : 'bg-white'
          )}
        ></div>
      ) : null}
      <div
        className={clsxm(
          backgroundColor ? `bg-[${backgroundColor}]` : 'bg-white',
          'p-4',
          imageUrl ? 'rounded-b-3xl' : 'rounded-3xl'
        )}
      >
        {children}
      </div>
    </div>
  );
}
