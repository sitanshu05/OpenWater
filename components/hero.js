import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/XYrDUd8Kz4HLNdZql_Ebwk6vc2OCuaw0MeENa5k67kvDD_X7AEbmcbbHMbMZDDXH1WSUn9hUp2rQsOeTEN2NH9bbOe-3HC50qCrEMAI=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
                Discover, collect and sell amazing NFTs
            </div>
            <div className={style.description}>
                OpenWater is the world's first and largest NFT market place
            </div>
            <button className={style.accentedButton}>Explore</button>
            <button className={style.button}>Create</button>
          </div>
          <div className={style.cardContainer}>
              <img className="rounded-t-lg" src ="https://lh3.googleusercontent.com/XYrDUd8Kz4HLNdZql_Ebwk6vc2OCuaw0MeENa5k67kvDD_X7AEbmcbbHMbMZDDXH1WSUn9hUp2rQsOeTEN2NH9bbOe-3HC50qCrEMAI=s550" alt=""/>
              <div className={style.infoContainer}>
                  <img className="h-[2.25rem] rounded-full" src="https://blogs.airdropalert.com/wp-content/uploads/2021/12/Sappy-Seal-PFP-NFTs-1003x1024.png" alt=""/>
                  <div className={style.author}>
                      <div className={style.name}>OneEyedPirate</div>
                      <a className= "text-[#1868b7]" href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/26295466185321165399678017206049401268544401990002960745176610597860968235009"> GaryArtist </a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
