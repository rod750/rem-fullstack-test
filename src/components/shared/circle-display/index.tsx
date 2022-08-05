export function CircleDisplay({ imageUrl }: { imageUrl: string }) {
  return (
    <div className='rounded-full bg-white p-1'>
      <div
        className='min-h-[50px] min-w-[50px] bg-cover'
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
    </div>
  );
}
