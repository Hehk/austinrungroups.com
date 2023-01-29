import H2 from "../components/h2";
import H3 from "../components/h3";
import Link from "../components/link";
import P from "../components/p";
import Content from "../components/content";

export default function Routes() {
  return (
    <Content>
      <P className="mb-8">
        WIP – I am currently in the progress of building out this page. If you
        have any suggestions, please reach out!
      </P>
      <H2>Long Runs</H2>
      <div className="mb-8">
        <H3>The Town Lake Loop</H3>
        <P>
          The loop, is a mostly dirt route that goes along the Colorado river
          through downtown Austin. It is the most popular route by far in
          Austin, and most long run groups at least do a section of their run on
          it.
        </P>
        <Link href="https://www.strava.com/routes/18412760">Segment</Link>
      </div>
      <div className="mb-8">
        <H3>Mt Bonnell</H3>
        <P>
          You can run from downtown to the top of Mt Bonnell, and back. It is a
          great route if you are up for hills. Overall the route will take about
          10 miles, and will end you back on the Town Lake Loop.
        </P>
        <Link href="https://onthegomap.com/?m=r&u=mi&w%5B%5D=Routes+may+not+be+suitable+for+public+use.&c%5B%5D=Route+data+%C2%A92023+On+The+Go+Map%2C+OpenStreetMap+Contributors&d=15375&f=9b6114eb90&n=1&dm=1&context=share&r2=ybvu5XXuqIh1a2M1IPKHW1Jo6~2M7U580A0O4MAg1UC1KAi1j2Qd1s2v3a2x2i2j2W1Pc1Vm1X1_1f1q4Z3k4Z3c3b2w1d1k4~2OFKFq1Z1m2v1w4n3i2t1o2~1eEtAY7f5c7n5g8f6SFk2d1W2RQ57Z15731J1H49H91l1K0F0Gm1JA2AII3K242688a1Y19Y13w5Nu15_13u4Bk13g11y37m36W1Ii1Qe5e3i2q3CSOm1Aa10Q3KHw1BUVm1DCd1UJMNe1DY1W2e1m2k1Q4k1FW15S6a4x8w1r3EJA0OEs6c4G9K3M2O8i1Oi2u1a5e5_1g2y1s2g7i7c3_2_2k2260A06p2c3g1W1KMW1o1ESISMIm2Y1Y10i2PG3I8GKY3o4o1Y1KKGSW1s2a1c3Mg1k3q3IQ4CAMMe2Mq1KQ_1w1EM6U4i2Fm68q21s20o13OZ1u3O4g4MY16W1Ao1OK6s1EW7Um4O1221k1p2e1d2Y1~1y1X48h10R5Nj1n3FZ1JZ1x1p2Z2t2l1p21324w1n1Y3Z3c3j2w1n1e2n1EDKVKd1W1f2a1r289G3W7y1g8i2q5o2m8s3Q8i2Ac13S7R8b14h29P7l8r3p5n2f8h2~6x1F47AZ1s2Vg2Je1JW1DEd2o1v1o1b3k2X3a3v1o148i1i2a2u2y1q2Ka1Ga1k1o36O0S7i1x1Y4X1W2d1e2j1q291b4L~6Tr1DJ5n1NV9X15X5Pa1t34N0n12r27p2Gl63h25TDLz1v1JPLp1Ld2DX1HPj3p3Lf1Z1b3Vr2FRJJn1X1X3n4FJH7F4h2QX10l2X1LHHRDRVn1JLf1VW2l2KL0F15z2j2b3z2f7h7x1r2z1f2Z5d5h2t1h1NN7L1J4FAt6b4LD90DKv1s3Z4y8R5V6j1GP3l2j1~1d1EX1Od1KLl1Vr3h2b5h3t4z2y3n82Lx38f12j14t4Cz14t16v5OX14X1AP6~1Sj2e1RGf8g6b7o5X7g5dEuAn2W2h2u1v4o3l2w1p1a1JGNGj4W3v1e1b3c2j4a3p4a3z1g1l1Y1b1W1VQh2k2Z2y2r2w3Pe1h1k2J9B2f1TL9N39070T6L8n5o2">
          Route
        </Link>
      </div>

      <H2>Tracks</H2>
      <div className="mb-8">
        <H3>Austin High School</H3>
        <P>
          The High School track is open to the public and is a great place to
          train.
        </P>
        <P>Location: 1715 W Cesar Chavez St, Austin, TX 78703</P>
      </div>
      <div className="mb-8">
        <H3>Yellow Jacket Stadium</H3>
        <P>A High School track in the East side of Austin.</P>
        <P>Location: 3101-3189 Hargrave St, Austin, TX 78702</P>
      </div>

      <H2>Trails</H2>
      <div></div>
      <div className="mb-8">
        <H3>Greenbelt</H3>
        <P>
          The greenbelt is a 10 mile loop that goes around the city of Austin.
          It is mostly paved, but there are some dirt sections. It is a great
          place to run, and there are many groups that run it.
        </P>
        <P>
          There are multiple entry points, parking at Barton Springs Pool and
          Barton Creek Greenbelt Trailhead are the easiest.
        </P>
      </div>
    </Content>
  );
}
