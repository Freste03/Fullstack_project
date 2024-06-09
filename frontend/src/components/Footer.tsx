import styled from 'styled-components'
import logo from '../assets/sneakers-experten_logo.png'

const FooterContainer = styled.footer`
    width: 100vw;
    height: 20vh;
    background-color: #1E1C1C;
    color: white;
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

const H1 = styled.h1`
    font-size: 1.2rem;
    color: white;
    font-weight: normal;
`

const Img = styled.img`
    width: 200px;
    position: absolute;
    left: 1rem;
`

const ContanctContainer = styled.div`
    margin-left: 4rem;
`

const InformationContainer = styled.div`

`

const FollowContainer = styled.div`
 
`

const P = styled.p`
    font-size: 1rem;
    color: white;
    font-weight: normal;
    margin-top: 0.5rem;
`

const HR = styled.hr`
    color: white;
    width: 100px;
    margin-top: 0.5rem;
`

const Svg = styled.svg`
    margin-top: 0.5rem;
`

function Footer() {
  return (
    <FooterContainer>
        <Img src={logo} alt='Sneakers-experten logo'></Img>
        <ContanctContainer>
            <H1>Contact</H1>
            <HR></HR>
            <P>070 123 45 67</P>
            <P>sneakersexperten@gmail.com</P>
            <P>Drottningggatan 4, Stockholm</P>
        </ContanctContainer>
        <InformationContainer>
            <H1>Information</H1>
            <HR></HR>
            <P>FAQ</P>
            <P>Shipping & Returns</P>
            <P>Terms & Conditions</P>
        </InformationContainer>
        <FollowContainer>
            <H1>Follow us</H1>
            <HR></HR>
            <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8,8)"><path d="M16,4c-6.61557,0 -12,5.38443 -12,12c0,6.61557 5.38443,12 12,12c6.61557,0 12,-5.38443 12,-12c0,-6.61557 -5.38443,-12 -12,-12zM16,6c5.53469,0 10,4.46531 10,10c0,5.02739 -3.68832,9.16128 -8.51172,9.87891v-6.96289h2.84766l0.44727,-2.89258h-3.29492v-1.58008c0,-1.201 0.39458,-2.26758 1.51758,-2.26758h1.80469v-2.52344c-0.317,-0.043 -0.98786,-0.13672 -2.25586,-0.13672c-2.648,0 -4.19922,1.39798 -4.19922,4.58398v1.92383h-2.72266v2.89258h2.72266v6.9375c-4.74661,-0.78287 -8.35547,-4.88047 -8.35547,-9.85352c0,-5.53469 4.46531,-10 10,-10z"></path></g></g>
            </Svg>
            <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0,0,256,256">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8,8)"><path d="M4.01758,4l9.07422,13.60938l-8.75586,10.39063h2.61523l7.29492,-8.65625l5.77148,8.65625h0.53516h7.46289l-9.30273,-13.95703l8.46289,-10.04297h-2.61523l-7.00195,8.31055l-5.54102,-8.31055zM7.75586,6h3.19141l13.33203,20h-3.19141z"></path></g></g>
            </Svg>
            <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g>
            </Svg>
        </FollowContainer>
    </FooterContainer>
  )
}

export default Footer