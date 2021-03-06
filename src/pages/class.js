import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      masa20: file(relativePath: { eq: "images/demo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="lg:pl-xs">
        <div className="border-solid lg:border-l min-w-full min-h-screen">
          <BackgroundImage className="px-8 lg:px-16 pt-40 lg:pt-16 pb-8 lg:pb-16 border-solid border-b bg-tint" fluid={data.masa20.childImageSharp.fluid}>
            <h1 className="text-3xl lg:text-4xl mt-auto lg:pr-64 z-10" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
              Return to Wushu
            </h1>
            <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>January 5, 2021</strong></h3>
          </BackgroundImage>
          <div className="px-8 lg:px-16 py-16">
            <p className="text-lg max-w-3xl">
              Due to the uncertainty surrounding the rapidly evolving pandemic situation, our approach to classes will change and adapt throughout the year.
              Please check this website and our social media channels for updates on classes and events.
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Membership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>In-Person Membership</h1>
                <p className="pb-4 text-gray-400">This is for if you want to attend both in-person and virtual classes.</p>
                <p className="text-xl">$40</p>
              </div>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Virtual Membership</h1>
                <p className="pb-4 text-gray-400">This membership is for if you only want to attend classes virtually.</p>
                <p className="text-xl">$20</p>
              </div>
            </div>
            <p className="text-lg max-w-3xl pt-6">
              In order to join UCSD Wushu, you must pay a membership fee to join.
              The fees for each type of membership are listed above.
            </p>
            <p className="text-lg max-w-3xl pt-3">
              We accept payment in the following forms:
              <ul className="list-disc pt-2">
                <li>Venmo: @UCSD-Wushu</li>
                <li>Zelle: ucsdwushu@gmail.com</li>
                <li>In-person: contact a <Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">cabinet member</Link> to make an arrangement</li>
              </ul>
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Fundamentals Training</h1>
                <p className="pb-6 text-gray-400">This class will focus on training fundamental techniques to build mastery of the basics. Beginner-friendly, but advanced students welcome!</p>
                <p className="text-lg">Mon 10-10:45a, <a href="https://goo.gl/maps/MxYY4BcATyLVYx1B9" className="border-b border-gray-700 hover:border-gray-100">Muir Field</a> | <a href="https://rec.ucsd.edu/Program/GetProgramDetails?courseId=f89da2fe-4ab6-4112-806b-57352f1b1bbf&semesterId=7ccf6749-da82-48b0-bfa5-7551fdbcc57f" className="border-b border-gray-700 hover:border-gray-100">Register on rec.ucsd.edu</a></p>
              </div>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Competition Training</h1>
                <p className="pb-6 text-gray-400">This training focuses on a wide variety of techniques, with a slant towards preparation for competition (if the health situation allows). All levels welcome!</p>
                <p className="text-lg">Time and Location TBD</p>
              </div>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Conditioning Training</h1>
                <p className="pb-6 text-gray-400">
                  This fully virtual class will help you build strength and stamina through conditioning exercises.
                  No forms or techniques are taught during this session.
                </p>
                <p className="text-lg">Time and Zoom Link TBD</p>
              </div>
            </div>
            <p className="text-lg max-w-3xl pt-6">
              As it currently stands, in order to support our training, UCSD Wushu will be hosting a combination of in-person and Zoom-based classes.
              All in-person classes will also be livestreamed through Zoom, but no guided instruction will be provided through Zoom for these in-person classes.
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Safety guidelines</h2>
            <p className="text-lg max-w-3xl">
              UCSD Recreation will be publishing comprehensive safety guidelines for facilitating safe outdoors recreational activities,
              which will be published here when they are available. Regardless, we will also be abiding by the following rules:
              <ul className="list-disc pt-2">
                <li>All members will maintain at least six feet of distance.</li>
                <li>No weapons will be shared between members.</li>
                <li>Masks are mandatory during practice.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default IndexPage
