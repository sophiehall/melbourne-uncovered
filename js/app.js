const Highlight = ({color, children}) => (
    <span className={`relative highlight highlight-${color}`}>
        <span className="relative z-2">{children}</span>
    </span>
)

const Intro = () => (
<div className="m-auto-ns f4 f3-m f2-l tc w-80-1 normal">
    <div className="mb3 mb4-ns">
        <Highlight color='aqua'>Melbourne Uncovered</Highlight> is a directory of where to find <Highlight color='yellow'>Melbourne's </Highlight>best<Highlight color='blue'> street art.</Highlight>{''}
    </div>
    <div >
        From <Highlight color='blue'>laneways</Highlight> and <Highlight color='blue'>back streets</Highlight>, to <Highlight color='pink'>buildings</Highlight> and <Highlight color='pink'>houses</Highlight>, Melbourne really is home to some of the best murals and graffiti out there. <Highlight color='yellow'>Check it out!</Highlight>{''}
    </div>
</div> 
);


// the ({className, href, children}) grabs our properties directly
// it means we don't have to type out props.className, props.href etc
const NavItem = ({ className, href, children, logo }) => (
    <li className={`mh2-ns f6 f4-l tc ${className}`}>
        <a className='white no-underline' href={href}>
            {/* here we check for the logo prop, if we have it, render logo, otherwise render nav text (children prop) */}
            {logo ? <img src="../images/dope-logo.png" className="db center logo" /> : children}    
        </a>
    </li>
);

const Nav = () => (
    <nav className='pt3 pt4-ns mb4 mb0-ns'>
        <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
            {menu.map(item => <NavItem {...item} />)}
        </ul>
    </nav>
);

const Overlay =({showInfo, title, description}) => (
    <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
              style={{
                  transform: showInfo ? 'none' : 'translateY(-100%)'
              }}>
                <div>
                  <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
                  <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
                </div>
              </div>
)

//  we can also create components as classes
// this gives us more advanced functionality and features such as the component lifecycle as well as react's in-built state

class Attraction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        }

        // here we tell our toggleInfo about this by using bind
        // otherwise things like setState will not work
        this.toggleInfo = this.toggleInfo.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
    }

    // this is our own method
    toggleInfo() {
        this.setState((prevState, props) => ({
            // here we invert our showInfo boolean by using the previous state and the exclamation mark
          showInfo: !prevState.showInfo
        }));
      }

      closeInfo() {
        //   here we use setState the usual way because we don't need access to the previous state, we're just force setting the showInfo to be false
          this.setState({
              showInfo: false
          });
      }


    render() {
        const {title, description, className, image} = this.props;
        const { showInfo } = this.state;
        const imageClick = () => {
            console.log('Click');
          } 
        return (
            <div
            className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${
                className
            }`}
            onMouseEnter={this.toggleInfo}
            //  this runs when our mouse leaves the attraction
            onMouseLeave={this.closeInfo}
            > 
            <div 
            className="relative"
            onChange={event => 
                    this.setState({
                    fullName: event.target.value
                })} />
            <div className="relative">    
            {/* Here we remember to pass along all of our props and state */}
            <Overlay {...this.props} {...this.state} />         
              <img src={`../images/${image}`} className="db" />
            </div>
          </div>
        )
    }
}


const App = () => (
    <div>
      <div className="min-vh-100 ph4 flex flex-column">
        <Nav />
        <Intro />
      </div>
      <div className="flex flex-wrap container">
      {attractions.map(attraction => <Attraction {...attraction} /> )}
      </div>
    </div>
  );

ReactDOM.render(<App />, document.getElementById('root'));
