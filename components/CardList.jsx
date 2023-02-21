import Card from './Card';

const CARD_ITEMS = [
  {
    id: '01',
    title: 'Reviving Retro PCs',
    content: 'What happens when old PCs are given modern upgrades?',
    image: '/assets/images/image-retro-pcs.jpg',
  },
  {
    id: '02',
    title: 'Top 10 Laptops of 2022',
    content: 'Our best picks for various needs and budgets.',
    image: '/assets/images/image-top-laptops.jpg',
  },
  {
    id: '03',
    title: 'The Growth of Gaming',
    content: 'How the pandemic has sparked fresh opportunities.',
    image: '/assets/images/image-gaming-growth.jpg',
  },
];

const CardList = () => {
  return (
    <div className='grid gap-8 mt-10 py-5 pb-[4.5rem] md:max-lg:mt-0 md:max-lg:pt-0 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] lg:col-span-2'>
      {CARD_ITEMS.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardList;
