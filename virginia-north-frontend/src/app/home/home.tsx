import './home.scss'

export default function Home() {
  return (
    <section id='home'>
      <div id='frame__container'>
      <svg id="rotatingText" viewBox="0 0 200 200">
          <defs>
            <path id="circle" d="M 100, 100
                    m -75, 0
                    a 75, 75 0 1, 0 150, 0
                    a 75, 75 0 1, 0 -150, 0
                    ">
            </path>
          </defs>
          <text width="400">
            <textPath alignment-baseline="top" xlinkHref="#circle" className="text">
              Have a wonderful day! Have a wonderful day! 
            </textPath>
          </text>
        </svg>
        <h1 className='hello' id='first_greeting'>
          Hello!
        </h1>
        <h1 className='hello' id='second_greeting'>
          Hello!
        </h1>
        <h2 id='message'>
          I&apos;m Ferris, thanks for stopping by to check out my portfolio!
        </h2>




        <svg id='text__curve' viewBox="0 -23 600 501">
        <path id="curvedText" fill="transparent"  d="M1 14.5002C195.295 -9.7426 384.5 8.00012 474.5 68.5001C564.5 129 551 158.5 551 261.5C551 364.5 691.5 459.5 691.5 459.5" />
        <text width="500">    
        <textPath xlinkHref="#curvedText" startOffset="19%" className='newText'>
          Hey follow me down here to see more!
        </textPath>
        </text>
        </svg>
      </div>
    </section>
  )
}
