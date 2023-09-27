import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>Here are some of the important things I remember about the tragedy of James Gatz...
      <ul>Green symbolizes money.  In many ways, this is a very old story about a poor boy who falls in love with a rich girl.</ul>
      <ul>Another view of it is that the whole can't-go-west-to-east thing is an entirely AMERICAN story.</ul>
      <ul>He's sorry about the clock.</ul>
      <ul>Reserving judgment is the source of infinite hope.</ul>
      <ul>Sure, you could argue that Nick has a crush on James, but then again there's the thing Tolkien said about Sam and Frodo.</ul>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
