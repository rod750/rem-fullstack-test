export function Picker({ label, defaultValue }: { label: string, defaultValue?: { label: string, value: any } }) {
  return (
    <div className='w-[100%] rounded-full bg-[#12325A] py-3 px-10 text-base font-bold text-white cursor-pointer'>
      {defaultValue ? defaultValue.label : label}
    </div>
  );
}
