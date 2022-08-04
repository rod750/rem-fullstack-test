export function Input({ label, ...props }: { label: string }) {
  return (
    <div className='flex flex-col gap-y-2'>
      <p className='text-base font-bold text-black'>{label}</p>
      <input
        className='rounded-lg bg-[#363636] p-1 font-bold text-white'
        {...props}
      ></input>
    </div>
  );
}
