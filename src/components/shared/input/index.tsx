type InputProps = React.PropsWithChildren<{ label: string, name: string, register: any }> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({
  label,
  register,
  name,
  ...props
}: InputProps) {
  return (
    <div className='flex flex-col gap-y-2'>
      <p className='text-base font-bold text-black'>{label}</p>
      <input
        className='rounded-lg bg-[#363636] p-1 font-bold text-white'
        {...props}
        {...register(name)}
      ></input>
    </div>
  );
}
