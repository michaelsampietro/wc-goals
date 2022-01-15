import type { NextPage } from 'next'
import Link from 'next/link';
import NavBar from '../components/NavBar';

import { request } from '../lib/datocms'

const HOMEPAGE_QUERY = `query HomeQuery {
  allWorldCups(orderBy: year_DESC) {
    id
    country
    year
    video {
      height
      provider
      providerUid
      thumbnailUrl
      title
      url
      width
    }
    logo {
      responsiveImage(imgixParams: { h: 200, fit: max }) {
        alt
        base64
        bgColor
        title
        src
      }
    } 

  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data }
  };
}

const Home: NextPage = ({ data }: any) => {
  return (

    <><NavBar /><div className='container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
      {data.allWorldCups.map((worldCup: any) => (
        <Link key={worldCup.id} href={'/teste'}>
          <div className='text-center justify-items-center my-5 cursor-pointer'>
            <div className='flex h-[200px] w-auto items-center'>
              {/* <Image data={worldCup.logo.responsiveImage} /> */}
              <img className='mx-auto' src={worldCup.logo.responsiveImage.src} alt={worldCup.logo.responsiveImage.alt} />

            </div>
            <span className='font-bold text-xl' key={worldCup.id}>{`${worldCup.year} - ${worldCup.country}`}</span>
          </div>
        </Link>
      ))}

    </div></>
  )
}

export default Home

