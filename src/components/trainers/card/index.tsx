import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';

export function TrainerCard({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) {
  return (
    <Card imageUrl={imageUrl}>
      <div className='flex-items-center flex'>
        <div className='grow self-center align-middle text-sm font-bold text-black'>
          {name}
        </div>
        <Button>Editar</Button>
      </div>
    </Card>
  );
}
