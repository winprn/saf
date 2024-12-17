import logo from './assets/images/avt.png';
import X from './assets/icons/X.svg';
import Discord from './assets/icons/discord.svg';
import Youtube from './assets/icons/youtube.svg';
import Telegram from './assets/icons/tele.svg';
import { Button } from './components/ui/button';
import Bartho from './assets/images/bartho.png';
import Pippy from './assets/images/pippy.png';
import Yuta from './assets/images/yuta.png';
import Luna from './assets/images/luna.png';
import Chillguy from './assets/images/chillguy.png';
import Drip from './assets/images/drip.png';
import GreenCandle from './assets/images/green_candle.png';
import Bird from './assets/images/bird.png';
import Banner from './assets/images/banner.png';
import { Copy, MoveRight, ShoppingBasket, Smile } from 'lucide-react';

function App() {
  return (
    <>
      <nav className='hidden px-12 py-4 lg:flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='relative rounded-full'>
            <img
              src={logo}
              alt='Sui Animal Farm Logo'
              className='rounded-full h-10 border border-t-[#652D3E] border-l-[#C4A17C] border-r-[#FFE46C] border-b-[#F5C779]'
            />
          </div>
          <div>
            <p className='text-2xl font-bold'>Sui Meme</p>
            <p>First Animal Farm on SUI</p>
          </div>
        </div>
        <div className='flex gap-20 text-xl'>
          <a href='/' className='text-[#4CDA68]'>
            Homepage
          </a>
          <a href='/'>Community</a>
          <a href='/'>Docs</a>
          <a href='/'>Platform</a>
        </div>
        <div className='flex gap-4 items-center'>
          <a href='/'>
            <img src={X} alt='X icon' />
          </a>
          <a href='/'>
            <img src={Discord} alt='X icon' />
          </a>
          <a href='/'>
            <img src={Youtube} alt='X icon' />
          </a>
          <a href='/'>
            <img src={Telegram} alt='X icon' />
          </a>
          <Button className='rounded-full'>Explore</Button>
        </div>
      </nav>
      <nav className='lg:hidden'>
        <div className='flex justify-between items-center px-4 py-2'>
          <div className='relative rounded-full'>
            <img
              src={logo}
              alt='Sui Animal Farm Logo'
              className='rounded-full h-10 border border-t-[#652D3E] border-l-[#C4A17C] border-r-[#FFE46C] border-b-[#F5C779]'
            />
          </div>
          <a href='/' className='text-[#4CDA68]'>
            Homepage
          </a>
          <div className='flex gap-4'>
            <img src={X} alt='X icon' />
            <img src={Telegram} alt='X icon' />
          </div>
        </div>
      </nav>
      <main className='flex flex-col gap-16'>
        <section
          className='relative w-screen flex justify-center items-center overflow-x-clip'
          style={{
            height: 'calc(100vh - 100px)',
          }}
        >
          <img
            className='absolute w-[128px] lg:w-[256px] rotate-[120deg] lg:-left-20 lg:-top-20 -left-7 -top-5'
            src={Bartho}
            alt='Bartholomew'
          />
          <img
            className='absolute w-[128px] lg:w-[256px] rotate-[-120deg] lg:-right-20 lg:-top-20 -right-7 -top-5'
            src={Pippy}
            alt='Pippy'
          />
          <img
            className='absolute w-[128px] lg:w-[256px] rotate-[60deg] lg:-left-20 bottom-0 -left-8'
            src={Yuta}
            alt='Yuta'
          />
          <img
            className='absolute w-[128px] lg:w-[256px] rotate-[-60deg] lg:-right-20 -right-5 bottom-0'
            src={Luna}
            alt='Luna'
          />
          <div className='text-center lg:max-w-[40%] flex flex-col gap-4 items-center'>
            <h1 className='text-5xl lg:text-6xl font-bold'>
              Landing Page is <span className='text-[#4CDA68]'>here</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum suscipit in magna a consequat. Nam id nisi nisl. Sed
              hendrerit pretium luctus.
            </p>
            <Button
              className='w-[70%] text-2xl lg:text-3xl rounded-full bg-[#4CDA68] p-8 hover:bg-[#5ac26f]'
              style={{
                boxShadow: '-4px 8px 0px rgba(76, 218, 104, 0.25)',
              }}
            >
              <ShoppingBasket size={40} />
              Trading Now
              <MoveRight size={40} color='black' />
            </Button>
          </div>
        </section>
        <section className='flex flex-col items-center gap-6'>
          <img src={Pippy} alt='Pippy' className='w-[128px]' />
          <h2 className='text-5xl font-semibold'>Introduction</h2>
          <div className='flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:h-[580px] lg:w-[55%] gap-8'>
            <div className='row-span-2 bg-[#FDDEA9] flex flex-col justify-between rounded-3xl overflow-hidden'>
              <div className='p-3 flex flex-col gap-2'>
                <h3 className='text-lg bg-white py-2 px-4 w-fit rounded-full'>
                  Headline
                </h3>
                <p className='text-[#7A6800] text-2xl font-medium'>
                  Advertisement Headline will be here
                </p>
              </div>
              <img src={Chillguy} alt='Chill Yuta' />
            </div>
            <div
              className='col-span-2 bg-[#C9F3F2] rounded-3xl overflow-hidden flex flex-col'
              style={{
                boxShadow:
                  '0px 15px 20px -5px rgba(10, 10, 10, 0.1), 0px 5px 10px -5px rgba(10, 10, 10, 0.05)',
              }}
            >
              <div className='px-8 flex flex-col gap-2 pb-0 pt-6'>
                <h3 className='text-lg bg-white text-[#113264] py-2 px-4 w-fit rounded-full'>
                  Headline
                </h3>
                <p className='text-[#113264] text-3xl lg:text-4xl font-medium'>
                  Advertisement Headline will be here, longer or more longer
                </p>
              </div>
              <img src={Drip} alt='Chill Yuta' className='grow' />
            </div>
            <div className='col-span-2 flex gap-4 rounded-3xl'>
              <div
                className='bg-[#FFFEFC] grow rounded-2xl'
                style={{
                  boxShadow:
                    '0px 15px 20px -5px rgba(10, 10, 10, 0.1), 0px 5px 10px -5px rgba(10, 10, 10, 0.05)',
                }}
              >
                <div className='p-3 flex flex-col gap-2'>
                  <h3 className='text-lg bg-black py-2 px-4 w-fit rounded-full text-white'>
                    Headline
                  </h3>
                  <p className='text-xl lg:text-2xl font-medium'>
                    Advertisement Headline will be here
                  </p>
                </div>
              </div>
              <div
                className='bg-[#FFFEFC] grow rounded-2xl'
                style={{
                  boxShadow:
                    '0px 15px 20px -5px rgba(10, 10, 10, 0.1), 0px 5px 10px -5px rgba(10, 10, 10, 0.05)',
                }}
              >
                <div className='p-3 flex flex-col gap-2'>
                  <h3 className='text-lg bg-black py-2 px-4 w-fit rounded-full text-white'>
                    Headline
                  </h3>
                  <p className='text-xl lg:text-2xl font-medium'>
                    Advertisement Headline will be here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center gap-8'>
          <img src={Yuta} alt='Yuta' className='w-[128px]' />
          <h3 className='text-4xl lg:text-5xl font-semibold'>
            How to{' '}
            <span className='bg-[#29F852] text-white rounded-xl px-4'>
              buy?
            </span>
          </h3>
          <div className='flex justify-between items-center w-full lg:w-1/2 px-4'>
            <div>
              <p className='text-lg lg:text-xl text-[#838383]'>
                Subtitle for extra in4
              </p>
              <h4 className='text-2xl lg:text-3xl'>First work is here</h4>
              <p>First step</p>
              <p>Second step</p>
              <p>Third step</p>
              <p>Fourth step</p>
            </div>
            <img
              src={Bartho}
              alt='Bartholomew'
              className='w-[128px] lg:w-[256px]'
            />
          </div>
          <div className='flex flex-row-reverse gap-4 justify-between items-center lg:w-1/2'>
            <div>
              <p className='text-lg lg:text-xl text-[#838383]'>
                Subtitle for extra in4
              </p>
              <h4 className='text-2xl lg:text-3xl'>First work is here</h4>
              <p>First step</p>
              <p>Second step</p>
              <p>Third step</p>
              <p>Fourth step</p>
            </div>
            <img
              src={Luna}
              alt='Bartholomew'
              className='w-[128px] lg:w-[256px]'
            />
          </div>
        </section>
        <section className='relative h-[60vh] pt-10 flex flex-col gap-10 items-center bg-[#AADDD3] -z-20'>
          <img
            src={GreenCandle}
            alt='To the moooooooon'
            className='absolute lg:w-[500px] w-[250px] lg:top-10 right-0 bottom-0 -z-10'
          />
          <img src={Pippy} alt='Pippy' className='w-[128px]' />
          <h3 className='text-[#202020] text-4xl lg:text-6xl font-semibold'>
            Contract Address
          </h3>
          <div className='max-w-full flex border-4 gap-4 px-4 bg-[#6DC5B4] text-white border-white rounded-full items-center justify-center'>
            <p className='truncate w-[80%]'>
              0xAA2A92059a9134d21D832AA2A92059a9134d21D832aaaaaaaaaaa
            </p>
            <Button variant='ghost' className='p-0 hover:bg-transparent'>
              <Copy />
            </Button>
          </div>
          <div className='flex gap-6'>
            <Button className='rounded-full text-xl'>Swap</Button>
            <Button className='rounded-full text-xl bg-white hover:bg-white text-black'>
              Chart
            </Button>
          </div>
        </section>
        <section className='flex flex-col items-center gap-10'>
          <img
            src={Luna}
            alt='Luna'
            className='w-[128px] border-[6px] border-b-[#FDB58B] border-transparent'
          />
          <h2 className='text-4xl lg:text-5xl font-semibold'>Tokenomic</h2>
          <div className='flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 w-full lg:max-w-[50%] gap-8'>
            <div
              className='rounded-3xl text-center flex gap-4 flex-col justify-between items-center bg-[#FEEA4B] py-8 px-'
              style={{
                boxShadow:
                  '0px 15px 20px -5px rgba(10, 10, 10, 0.1), 0px 5px 10px -5px rgba(10, 10, 10, 0.05)',
              }}
            >
              <h4 className='text-2xl font-semibold text-[#473B1F]'>AIRDROP</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum suscipit in magna a consequat.
              </p>
              <div className='relative'>
                <img src={Pippy} alt='Pippy' className='w-[128px]' />
              </div>
            </div>
            <div
              className='rounded-3xl text-center flex gap-4 flex-col justify-between items-center bg-[#F8C775] py-8 px-'
              style={{
                boxShadow:
                  '0px 15px 20px -5px rgba(10, 10, 10, 0.1), 0px 5px 10px -5px rgba(10, 10, 10, 0.05)',
              }}
            >
              <h4 className='text-2xl font-semibold text-[#473B1F]'>BURN</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum suscipit in magna a consequat.
              </p>
              <img src={Yuta} alt='Pippy' className='w-[128px]' />
            </div>
            <div
              className='rounded-3xl text-center flex gap-4 flex-col justify-between items-center bg-[#C5A27C] py-8 px-'
              style={{
                boxShadow:
                  '0px 15px 20px -5px rgba(10, 10, 10, 0.1), 0px 5px 10px -5px rgba(10, 10, 10, 0.05)',
              }}
            >
              <h4 className='text-2xl font-semibold text-[#473B1F]'>
                TOTAL SUPPLY
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum suscipit in magna a consequat.
              </p>
              <img src={Bartho} alt='Pippy' className='w-[128px]' />
            </div>
            <div
              className='rounded-3xl text-center flex gap-4 flex-col justify-between items-center bg-white py-8 px-'
              style={{
                boxShadow:
                  '0px 15px 20px -5px rgba(10, 10, 10, 0.1), 0px 5px 10px -5px rgba(10, 10, 10, 0.05)',
              }}
            >
              <h4 className='text-2xl font-semibold text-[#473B1F]'>
                CIRCULATING
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum suscipit in magna a consequat.
              </p>
              <img src={Luna} alt='Pippy' className='w-[128px]' />
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center mb-20'>
          <img src={Bird} alt='Bird' className='w-[128px]' />
          <h3 className='text-5xl font-semibold mb-20'>
            ROAD<span className='text-[#4CDA68]'>MAP</span>
          </h3>
          <div className='relative w-full lg:w-3/4 h-2 bg-[#B2B2B2] rounded-full'>
            <div className='absolute -top-[60px] lg:left-[10%] flex flex-col items-center gap-2'>
              <p className='bg-black rounded-full text-white flex items-center gap-2 px-4 py-2'>
                <Smile />
                Extra data
              </p>
              <div className='w-1 h-8 rounded-full bg-black' />
            </div>
            <div className='absolute -top-[10px] left-[30%] lg:left-[40%] flex flex-col items-center gap-2'>
              <div className='w-1 h-8 rounded-full bg-black' />
              <p className='bg-black rounded-full text-white flex items-center gap-2 px-4 py-2'>
                <Smile />
                Extra data
              </p>
            </div>
            <div className='absolute -top-[60px] left-[60%] lg:left-[80%] flex flex-col items-center gap-2'>
              <p className='bg-black rounded-full text-white flex items-center gap-2 px-4 py-2'>
                <Smile />
                Extra data
              </p>
              <div className='w-1 h-8 rounded-full bg-black' />
            </div>
          </div>
        </section>
        <section>
          <img
            src={Banner}
            alt='Banner'
            className='w-full h-[150px] object-cover'
          />
        </section>
      </main>
    </>
  );
}

export default App;
