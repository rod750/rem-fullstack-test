export function CircleDisplay({ imageUrl }: { imageUrl: string }) {
  return (
    <div className='rounded-full bg-white p-3'>
      <div
        className='min-h-[30px] min-w-[30px] bg-cover'
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
    </div>
  );
}
