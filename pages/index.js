import CardList from '@components/CardList';
import Hero from '@components/Hero';
import NewsList from '@components/NewsList';

export default function Home() {
  return (
    <>
      <div className='md:grid md:grid-cols-[1fr_1fr] md:gap-x-8 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[2.1fr_1fr] md:pt-8 md:items-start'>
        <Hero />
        <NewsList />
        <CardList />
      </div>
    </>
  );
}
