import NewsItem from './NewsItem';

const NEWS_ITEMS = [
  {
    title: 'Hydrogen VS Electric Cars',
    content: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    content:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    content:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means',
  },
];

const NewsList = () => {
  return (
    <div className='bg-grayish-blue-300 px-[1.4rem] pt-5 mt-5 md:mt-0 md:max-lg:order-2'>
      <h3 className='text-soft-orange text-[2rem] font-bold lg:text-[2.5rem]'>
        New
      </h3>
      <div>
        {NEWS_ITEMS.map((item) => (
          <NewsItem
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
