const attractions = [
  {
    title: 'Hosier Lane',
    description:
      'For a true understanding of laneway art, a journey of exploration into side lanes must be taken, as it is here that street art and an authentic urban voice can be found. Graffiti though it may be, these colourful references to popular culture and youth subcultures dominate the concrete walls of tiny Hosier Lane.',
    link: 'https://www.google.com.au/maps/place/Hosier+Ln,+Melbourne+VIC+3000/@-37.8165452,144.9691634,19z/data=!4m2!3m1!1s0x6ad642b6521c6a15:0xa92699044c913e0f',
    image: 'hosier-lane.jpg',
    className: 'w-50-l'
  },
  {
    title: 'Caledonian Lane',
    description:
      'This casual home to graphic art is tucked in a sliver of a laneway between Little Bourke and Lonsdale Street. One of the lesser-known laneways in Melbourne’s jam-packed CBD, hit up Shortstop Coffee & Donuts for a post-walk treat.',
    link: 'http://www.shinjuku-robot.com/pc/system.php?lng=en',
    image: 'caledonian-lane.jpg',
    className: 'w-third-l ml5-l'
  },
  {
    title: 'Duckboard Place',
    description:
      'Duckboard Place curves around from Flinders Lane back to AC/DC Lane. In addition to several significant murals, Duckboard Place is home to some high end restaurants, including Lee Ho Fook.',
    link: 'https://www.google.com.au/maps/place/Duckboard+Pl,+Melbourne+VIC+3000/@-37.8155369,144.9691847,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642b7e3d92adf:0x35a42df991aa107!8m2!3d-37.8155369!4d144.9713787',
    image: 'duckboard-place.jpg',
    className: 'w-40-l ml5-l mr5-l'
  },
  {
    title: 'Croft Alley',
    description:
      'Right in the centre of Chinatown, Croft Alley winds off Little Bourke Street. At the end of the alley, you will find one of  Melbourne’s favourite laneway bars, Croft Institute.',
    link: 'https://www.google.com.au/maps/place/Croft+Alley,+Melbourne+VIC+3000/@-37.8118654,144.9668317,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642c90471bfdd:0x98f285c11942181f!8m2!3d-37.8118654!4d144.9690257',
    image: 'croft-alley.jpg',
    className: 'w-third-l ml-auto-ns'
  },
  {
    title: 'Everfresh Fitzroy Mural',
    description:
      'This large graphic mural, which declares "Welcome to Sunny Fitzroy", sits on the side of the long-standing live music venue The Night Cat. It was painted back in 2009 by Melbourne street art crew Everfresh, and can be found on the corner of Johnston and Young Streets in Fitzroy.',
    link: 'http://yayoi-kusama.jp',
    image: 'everfresh-fitzroy.jpg',
    className: 'w-40-l'
  },
  {
    title: 'Keith Haring mural',
    description:
      'The late but legendary New York artist Keith Haring created this mural for Melbourne back in 1984, and it’s been one of the cities favourite pieces of public art ever since. It is located on Johnston Street in Collingwood.',
    link: 'https://www.google.com.au/maps/place/Keith+Haring+Mural/@-37.7993687,144.9867758,15z/data=!4m5!3m4!1s0x0:0x4e95ccd79b0c4967!8m2!3d-37.7993687!4d144.9867758',
    image: 'keith-haring.jpg',
    className: 'w-third-l ml5-l mr-auto-l'
  },
  {
    title: 'AC/DC Lane',
    description:
      'Running off Flinders Lane, AC/DC Lane was named back in 2004 to pay tribute to the Australian rock band. As you might expect, the street art features all kinds of musicians – both real and imagined. The lane is also home to the legendary live music venue, Cherry Bar.',
    link: 'https://www.google.com.au/maps/place/AC%2FDC+Lane/@-37.8155777,144.9687077,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642b7e747276f:0x276f8411aa56b149!8m2!3d-37.8155777!4d144.9708964',
    image: 'acdc-lane.jpg',
    className: 'w-third-l ml-auto-l mr5-l'
  },
  {
    title: 'Centre Place',
    description:
      'Find it between Collins Street and Flinder Lane and feast your eyes on some of Melbourne’s most high-profile and elaborate stencil work and graffiti art.',
    link: 'https://www.google.com.au/maps/place/Centre+Pl,+Melbourne+VIC+3000/@-37.8164247,144.9632596,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642b43f2531f5:0x4f84dacb702c976c!8m2!3d-37.8166479!4d144.9655504',
    image: 'centre-place.jpg',
    className: 'w-third-l mr-auto-l'
  },
  {
    title: 'Rankins Lane',
    description:
      'Just around the corner from Bourke Street Mall, Rankins Lane is a fairly narrow, unassuming brick lane, but is also home to this artwork.',
    link: 'https://www.google.com.au/maps/place/Rankins+Ln,+Melbourne+VIC+3000/@-37.8135273,144.9620685,17z/data=!4m13!1m7!3m6!1s0x6ad642b53bed9555:0x812c7fa4cbca91a1!2sRankins+Ln,+Melbourne+VIC+3000!3b1!8m2!3d-37.8137909!4d144.962161!3m4!1s0x6ad642b53bed9555:0x812c7fa4cbca91a1!8m2!3d-37.8137909!4d144.962161',
    image: 'rankins-lane.jpg',
    className: 'w-third-l ml-auto-l'
  },
  {
    title: 'Union Lane',
    description:
      'This teeny tiny lane always packs a pop of color. It’s right off Bourke Street, so you can take in the colorful art while listening to the best buskers in town! Be sure to look all around because you never know what you’ll find on Union Lane.',
    link: 'https://www.google.com/maps/place/Union+Ln,+Melbourne+VIC+3000/data=!4m2!3m1!1s0x6ad642b5bd6f4cd9:0x3f003f4f00baf33d?sa=X&ved=2ahUKEwjwjKO04ZDlAhWXWX0KHSt0ByIQ8gEwAHoECAoQAQ',
    image: 'union-lane.jpg',
    className: 'w-third-l ml5-l'
  }
];
