"use client";

import {ReactNode, useState} from "react";
import PulsatingButton from "@/components/ui/pulsating-button";
import {
    DrawerBody,
    DrawerContent,
    DrawerRoot,
    DrawerTrigger
} from "@/components/ui/drawer";

export default function Page() {
    return (
        <div className={'leading-loose'}>
            <Nav/>
            <Home/>
            <About/>
            <Naming/>
            <Services/>
            <GlobalNetwork/>
            <ContactUs/>
        </div>
    );
}


const ContactItem = ({title, icon, className}: { title: string, icon: ReactNode, className: string }) => {
    return <div className={`px-8 py-3 rounded-lg flex items-center justify-center space-x-6  ${className}`}>
        {icon}
        <div className={'uppercase text-2xl text-white font-semibold text-center'}>{title}</div>
    </div>
}
const ContactUs = () => {
    return <div id={'contact-us'} className={'py-32  bg-blue-50'}>
        <Container className={'grid grid-cols-2 xl:grid-cols-3 gap-20'}>
            <div className={'col-span-2'}>
                <h2 className={"text-7xl font-light uppercase"}>
                    Contact Us
                </h2>
                <div className={'font-medium text-2xl my-10'}>
                    <p>Get in touch with us today!</p>
                    <p>
                        You can reach us via email at <b className={'font-bold'}>info@hatke.org</b>, call us at <b
                        className={'font-bold'}>+98 9120 180 150</b>
                    </p>
                </div>
            </div>
            <div className="col-span-2 xl:col-span-1 flex flex-col space-y-6">
                <ContactItem title={'Telegram'} icon={<Telegram/>} className={'bg-blue-500'}/>
                <ContactItem title={'WhatsApp'} icon={<Whatsapp/>} className={'bg-green-500'}/>
                <ContactItem title={'Wechat'} icon={<Wechat/>} className={'bg-sky-500'}/>
            </div>
        </Container>
    </div>
}

const Services = () => {
    return <div id={'services'} className={'py-32 bg-blue-50'}>
        <Container>
            <h2 className={"text-7xl font-light uppercase"}>
                Our Services
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-20">
                <ServiceItem title={'Sea Freight'} icon={<SeaIcon/>}/>
                <ServiceItem title={'Air Cargo'} icon={<SkyIcon/>}/>
                <ServiceItem title={'Land Transport'} icon={<LandIcon/>}/>
                <ServiceItem title={'customs brokerage'} icon={<CalcIcon/>}/>
                <ServiceItem title={'logistics consultancy'} icon={<ShakeIcon/>}/>
            </div>
            <div className={'font-medium text-2xl my-10'}>
                Our diverse range of services includes sea freight, land transport, air cargo, customs brokerage, and
                logistics consultancy. Each service is tailored to meet the unique demands of our clients, ensuring
                optimal efficiency and reliability.
            </div>
        </Container>
    </div>
}

const GlobalNetwork = () => {
    return <div id={'network'} className={'py-32'}>
        <Container>
            <h2 className={"text-7xl font-light uppercase"}>
                Global Network
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 my-20">
                <NetworkItem title={'Middle East'} icon={<img src={'/middle-east.png'}/>}/>
                <NetworkItem title={'China'} icon={<img src={'/china.png'}/>}/>
                <NetworkItem title={'SE Asia'} icon={<img src={'/sea.png'}/>}/>
            </div>
            <div className={'font-medium text-2xl my-10'}>
                With key hubs in strategic locations in Middle East, China and SE Asia, Hatke Global Logistics ensures
                your cargo reaches its destination smoothly and on time. Explore our global network and see how we
                connect the world through seamless logistics solutions.
            </div>
        </Container>
    </div>
}

const NetworkItem = ({title, icon}: { title: string, icon: ReactNode }) => {
    return <div className={'p-6 flex flex-col items-center justify-center space-y-6'}>
        {icon}
        <div className={'uppercase text-3xl text-center'}>{title}</div>
    </div>
}


const ServiceItem = ({title, icon}: { title: string, icon: ReactNode }) => {
    return <div
        className={'bg-white rounded shadow-2xl aspect-square p-6 flex flex-col items-center justify-center space-y-6'}>
        {icon}
        <div className={'uppercase text-3xl text-center'}>{title}</div>
    </div>
}

const Naming = () => {
    return <div className={'py-20 bg-blue-500 text-white font-medium text-2xl'}>
        <Container>
            Hatke, named after the river that nurtures our ancestral village, symbolizes our principles of transparency,
            fluency, and dynamism. Like the clear waters revealing the riverbed below, we ensure transparency in all our
            processes. Our operations flow as seamlessly as the river’s currents, dynamically adapting to every
            challenge. Just as Hatke moves purposefully toward the sea, we are driven toward the sea of success,
            delivering excellence with every shipment
        </Container>
    </div>
}

const About = () => {
    return <div id={'about'}><Container className={'grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-20 py-32 items-center'}>
        <div className={'col-span-2 space-y-10'}>
            <h2 className={"text-7xl font-light uppercase"}>
                About Hatke
            </h2>
            <p className={"font-medium text-2xl my-10"}>
                Established with a vision to transform the transportation industry, Hatke Global Logistics offers
                unparalleled expertise and a commitment to excellence. Our mission is to provide transparent, dynamic,
                and efficient logistics solutions, ensuring our clients needs are met with utmost precision.
            </p>
        </div>
        <div className={'grid grid-cols-1 col-span-2 md:col-span-1 gap-5'}>
            <img src="/about-1.jpg" alt="" className={'rounded object-cover w-full'}/>
            <img src="/about-2.jpg" alt="" className={'rounded object-cover w-full'}/>
        </div>
    </Container>
    </div>
}

const Home = () => {
    return (
        <div id={'home'} className={"w-full overflow-hidden relative"}>
            <Container className={"text-center py-20 z-10 relative"}>
                <h2 className={"text-center text-6xl font-bold my-20"}>
                    Welcome to Hatke Global Logistics!
                </h2>
                <p className={"font-medium text-2xl md:px-10 xl:px-32 leading-loose my-10"}>
                    We provide seamless and reliable transportation solutions across sea, land, and air. Discover
                    our
                    comprehensive services and see how we can help your business thrive.
                </p>
                <div className="flex items-center justify-center my-10">
                    <PulsatingButton duration={"5s"} href={'#contact-us'}
                                     className={"px-20 py-3 font-bold text-2xl bg-blue-500 !text-white rounded-lg"}>Contact
                        Us</PulsatingButton>
                </div>
            </Container>
            <img className={"w-full h-full scale-[1.2] object-cover blur absolute left-0 top-0"} src={"/banner.jpg"}/>

        </div>
    )
}

const Container = ({children, className = ''}: { children: ReactNode, className?: string }) => {
    return <div className={`max-w-[1200px] px-4  md:px-10 mx-auto ${className}`}>{children}</div>
}

const NavItem = (props: { children: ReactNode, href: string }) => {
    return (
        <a href={props.href} className={"font-medium text-xl"}>{props.children}</a>
    )
}

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    // const btnRef = useRef()

    return (
        <div className={'lg:hidden'}>
            <DrawerRoot placement={'end'} open={open} onOpenChange={(e) => setOpen(e.open)}>
                <DrawerTrigger>
                    <MenuIcon/>
                </DrawerTrigger>
                <DrawerContent portalled={false}>
                    <DrawerBody>
                        <div className="grid grid-cols-1 gap-3 text-xl leading-loose py-10">
                            <a href={'#home'}>Home</a>
                            <a href={'#about'}>About</a>
                            <a href={'#services'}>Services</a>
                            <a href={'#network'}>Global Network</a>
                            <a href={'#contact-us'}>Contact Us</a>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </DrawerRoot>
        </div>
    )
}
const Nav = () => (
    <div>
        <Container className='flex items-center justify-between h-[154px]'>
            <div className={"font-bold text-2xl"}>Hatke Global Logistics</div>
            <div className={"hidden lg:flex items-center space-x-10"}>
                <NavItem href={'#home'}>Home</NavItem>
                <NavItem href={'#about'}>About</NavItem>
                <NavItem href={'#services'}>Services</NavItem>
                <NavItem href={'#network'}>Global Network</NavItem>
                <NavItem href={'#contact-us'}>Contact Us</NavItem>
            </div>
            <MobileNav/>
        </Container>
    </div>
)

const SeaIcon = () => {
    return <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M36.1086 69.3113V22.239M36.1086 69.3113C27.1912 69.3113 18.639 65.769 12.3335 59.4634C6.0279 53.1579 2.48547 44.6057 2.48547 35.6883H12.5724M36.1086 69.3113C45.026 69.3113 53.5782 65.769 59.8837 59.4634C66.1893 53.1579 69.7317 44.6057 69.7317 35.6883H59.6448M36.1086 22.239C41.6795 22.239 46.1955 17.723 46.1955 12.1521C46.1955 6.58126 41.6795 2.06519 36.1086 2.06519C30.5378 2.06519 26.0217 6.58126 26.0217 12.1521C26.0217 17.723 30.5377 22.239 36.1086 22.239Z"
            stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

const SkyIcon = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M67.9047 74.528L59.9184 38.1457L75.4474 22.6166C82.1027 15.9614 84.3211 7.08762 82.1027 2.65076C77.6658 0.432328 68.7921 2.65076 62.1368 9.30606L46.6078 24.8351L10.2255 16.8487C8.00706 16.405 6.23231 17.2924 5.34494 19.0672L4.01388 21.2856C3.12651 23.504 3.5702 25.7225 5.34494 27.0535L28.8603 42.5825L19.9866 55.8931H6.676L2.23914 60.33L15.5497 69.2037L24.4235 82.5143L28.8603 78.0775V64.7669L42.1709 55.8931L57.6999 79.4085C59.031 81.1833 61.2494 81.6269 63.4679 80.7396L65.6863 79.8522C67.461 78.5211 68.3484 76.7464 67.9047 74.528Z"
            stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

const LandIcon = () => {
    return <svg width="80" height="65" viewBox="0 0 80 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M47.4008 55.0183V9.57405C47.4008 7.56529 46.6028 5.6388 45.1824 4.21839C43.762 2.79798 41.8355 2 39.8268 2H9.53058C7.52181 2 5.59532 2.79798 4.17492 4.21839C2.75451 5.6388 1.95653 7.56529 1.95653 9.57405V51.2313C1.95653 52.2357 2.35552 53.1989 3.06572 53.9092C3.77593 54.6194 4.73917 55.0183 5.74355 55.0183H13.3176M13.3176 55.0183C13.3176 59.2014 16.7086 62.5924 20.8917 62.5924C25.0747 62.5924 28.4657 59.2014 28.4657 55.0184M13.3176 55.0183C13.3176 50.8353 16.7086 47.4443 20.8917 47.4443C25.0747 47.4443 28.4657 50.8353 28.4657 55.0184M51.1879 55.0184H28.4657M51.1879 55.0184C51.1879 59.2014 54.5789 62.5924 58.7619 62.5924C62.9449 62.5924 66.336 59.2013 66.336 55.0183M51.1879 55.0184C51.1879 50.8353 54.5789 47.4443 58.7619 47.4443C62.9449 47.4443 66.336 50.8352 66.336 55.0183M66.336 55.0183H73.91C74.9144 55.0183 75.8777 54.6193 76.5879 53.9091C77.2981 53.1989 77.6971 52.2356 77.6971 51.2312V37.4086C77.6955 36.5492 77.4017 35.7158 76.8639 35.0455L63.6851 18.5719C63.3309 18.1284 62.8815 17.7702 62.3702 17.5237C61.859 17.2772 61.2988 17.1488 60.7312 17.148H47.4009"
            stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

const CalcIcon = () => {
    return <svg width="55" height="64" viewBox="0 0 55 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M42.8607 10.1902H12.2901C11.9522 10.1902 11.6283 10.3244 11.3894 10.5633C11.1505 10.8022 11.0163 11.1262 11.0163 11.464V26.7493C11.0163 27.0871 11.1505 27.4111 11.3894 27.65C11.6283 27.8889 11.9522 28.0231 12.2901 28.0231H42.8607C43.1986 28.0231 43.5225 27.8889 43.7614 27.65C44.0003 27.4111 44.1345 27.0871 44.1345 26.7493V11.464C44.1345 11.1262 44.0003 10.8022 43.7614 10.5633C43.5225 10.3244 43.1986 10.1902 42.8607 10.1902ZM41.587 25.4755H13.5639V12.7378H41.587V25.4755ZM50.5034 0H4.64741C3.63393 0 2.66196 0.402604 1.94532 1.11924C1.22868 1.83588 0.82608 2.80785 0.82608 3.82133V59.8675C0.82608 60.881 1.22868 61.853 1.94532 62.5696C2.66196 63.2862 3.63393 63.6889 4.64741 63.6889H50.5034C51.5169 63.6889 52.4888 63.2862 53.2055 62.5696C53.9221 61.853 54.3247 60.881 54.3247 59.8675V3.82133C54.3247 2.80785 53.9221 1.83588 53.2055 1.11924C52.4888 0.402604 51.5169 0 50.5034 0ZM51.7772 59.8675C51.7772 60.2054 51.643 60.5293 51.4041 60.7682C51.1652 61.0071 50.8412 61.1413 50.5034 61.1413H4.64741C4.30959 61.1413 3.9856 61.0071 3.74672 60.7682C3.50784 60.5293 3.37363 60.2054 3.37363 59.8675V3.82133C3.37363 3.4835 3.50784 3.15951 3.74672 2.92064C3.9856 2.68176 4.30959 2.54755 4.64741 2.54755H50.5034C50.8412 2.54755 51.1652 2.68176 51.4041 2.92064C51.643 3.15951 51.7772 3.4835 51.7772 3.82133V59.8675ZM17.3852 38.2133C17.3852 38.7172 17.2358 39.2097 16.9558 39.6287C16.6759 40.0476 16.278 40.3741 15.8125 40.5669C15.347 40.7598 14.8348 40.8102 14.3406 40.7119C13.8464 40.6136 13.3925 40.371 13.0362 40.0147C12.68 39.6584 12.4373 39.2045 12.339 38.7103C12.2407 38.2161 12.2912 37.7039 12.484 37.2384C12.6768 36.7729 13.0033 36.375 13.4223 36.0951C13.8412 35.8152 14.3338 35.6658 14.8376 35.6658C15.5133 35.6658 16.1613 35.9342 16.639 36.4119C17.1168 36.8897 17.3852 37.5377 17.3852 38.2133ZM30.123 38.2133C30.123 38.7172 29.9735 39.2097 29.6936 39.6287C29.4137 40.0476 29.0158 40.3741 28.5503 40.5669C28.0848 40.7598 27.5726 40.8102 27.0784 40.7119C26.5842 40.6136 26.1303 40.371 25.774 40.0147C25.4177 39.6584 25.1751 39.2045 25.0768 38.7103C24.9785 38.2161 25.0289 37.7039 25.2218 37.2384C25.4146 36.7729 25.7411 36.375 26.1601 36.0951C26.579 35.8152 27.0715 35.6658 27.5754 35.6658C28.2511 35.6658 28.899 35.9342 29.3768 36.4119C29.8546 36.8897 30.123 37.5377 30.123 38.2133ZM42.8607 38.2133C42.8607 38.7172 42.7113 39.2097 42.4314 39.6287C42.1515 40.0476 41.7536 40.3741 41.2881 40.5669C40.8226 40.7598 40.3103 40.8102 39.8162 40.7119C39.322 40.6136 38.8681 40.371 38.5118 40.0147C38.1555 39.6584 37.9129 39.2045 37.8146 38.7103C37.7163 38.2161 37.7667 37.7039 37.9595 37.2384C38.1524 36.7729 38.4789 36.375 38.8978 36.0951C39.3168 35.8152 39.8093 35.6658 40.3132 35.6658C40.9888 35.6658 41.6368 35.9342 42.1146 36.4119C42.5923 36.8897 42.8607 37.5377 42.8607 38.2133ZM17.3852 50.9511C17.3852 51.4549 17.2358 51.9475 16.9558 52.3664C16.6759 52.7854 16.278 53.1119 15.8125 53.3047C15.347 53.4975 14.8348 53.548 14.3406 53.4497C13.8464 53.3514 13.3925 53.1088 13.0362 52.7525C12.68 52.3962 12.4373 51.9423 12.339 51.4481C12.2407 50.9539 12.2912 50.4417 12.484 49.9762C12.6768 49.5107 13.0033 49.1128 13.4223 48.8329C13.8412 48.5529 14.3338 48.4035 14.8376 48.4035C15.5133 48.4035 16.1613 48.6719 16.639 49.1497C17.1168 49.6274 17.3852 50.2754 17.3852 50.9511ZM30.123 50.9511C30.123 51.4549 29.9735 51.9475 29.6936 52.3664C29.4137 52.7854 29.0158 53.1119 28.5503 53.3047C28.0848 53.4975 27.5726 53.548 27.0784 53.4497C26.5842 53.3514 26.1303 53.1088 25.774 52.7525C25.4177 52.3962 25.1751 51.9423 25.0768 51.4481C24.9785 50.9539 25.0289 50.4417 25.2218 49.9762C25.4146 49.5107 25.7411 49.1128 26.1601 48.8329C26.579 48.5529 27.0715 48.4035 27.5754 48.4035C28.2511 48.4035 28.899 48.6719 29.3768 49.1497C29.8546 49.6274 30.123 50.2754 30.123 50.9511ZM42.8607 50.9511C42.8607 51.4549 42.7113 51.9475 42.4314 52.3664C42.1515 52.7854 41.7536 53.1119 41.2881 53.3047C40.8226 53.4975 40.3103 53.548 39.8162 53.4497C39.322 53.3514 38.8681 53.1088 38.5118 52.7525C38.1555 52.3962 37.9129 51.9423 37.8146 51.4481C37.7163 50.9539 37.7667 50.4417 37.9595 49.9762C38.1524 49.5107 38.4789 49.1128 38.8978 48.8329C39.3168 48.5529 39.8093 48.4035 40.3132 48.4035C40.9888 48.4035 41.6368 48.6719 42.1146 49.1497C42.5923 49.6274 42.8607 50.2754 42.8607 50.9511Z"
            fill="black"/>
    </svg>

}

const ShakeIcon = () => {
    return <svg width="96" height="66" viewBox="0 0 96 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M95.5178 22.8441L85.7271 3.32049C85.4569 2.78078 85.0829 2.29949 84.6264 1.90408C84.1699 1.50868 83.6398 1.20691 83.0665 1.01601C82.4931 0.825118 81.8877 0.748833 81.2848 0.791515C80.6819 0.834196 80.0934 0.995008 79.5527 1.26477L69.4974 6.26434L48.8345 0.813046C48.5831 0.746846 48.3189 0.746846 48.0675 0.813046L27.4046 6.26434L17.3492 1.24563C16.8086 0.975868 16.2201 0.815056 15.6172 0.772374C15.0143 0.729693 14.4089 0.805977 13.8355 0.996873C13.2622 1.18777 12.7321 1.48953 12.2756 1.88494C11.8191 2.28034 11.4451 2.76164 11.1749 3.30135L1.38419 22.8441C1.11395 23.3837 0.952848 23.9713 0.91009 24.5731C0.867332 25.1749 0.943754 25.7792 1.13499 26.3515C1.32623 26.9239 1.62853 27.453 2.02464 27.9087C2.42075 28.3644 2.90291 28.7377 3.44358 29.0074L13.9093 34.2328L35.2893 49.4765C35.4449 49.5883 35.6207 49.6689 35.807 49.7139L60.351 55.8389C60.6063 55.9057 60.8746 55.9055 61.1299 55.8385C61.3852 55.7714 61.6189 55.6397 61.8082 55.4561L83.1078 34.1945L93.4622 29.0265C94.0029 28.7569 94.4851 28.3835 94.8812 27.9278C95.2773 27.4721 95.5796 26.943 95.7708 26.3707C95.9621 25.7983 96.0385 25.194 95.9957 24.5922C95.953 23.9904 95.7919 23.4029 95.5216 22.8632L95.5178 22.8441ZM75.9594 36.9891L61.6932 25.5812C61.3978 25.3447 61.0253 25.2255 60.6472 25.2467C60.2691 25.2679 59.9123 25.428 59.6453 25.696C52.1709 33.2145 43.7915 32.246 38.4417 28.8351C38.2447 28.709 38.0787 28.5403 37.9559 28.3416C37.8331 28.1428 37.7567 27.919 37.7322 27.6867C37.706 27.4631 37.7307 27.2365 37.8044 27.0237C37.8781 26.811 37.9989 26.6175 38.1579 26.4579L55.2082 9.94702H68.9797L80.3312 32.6135L75.9594 36.9891ZM4.04567 25.3821C3.92303 25.0029 3.9533 24.591 4.13004 24.2337L13.9361 4.67183C14.0619 4.41902 14.2553 4.20586 14.4949 4.05588C14.7345 3.90591 15.0109 3.82496 15.2937 3.82198C15.5309 3.82342 15.7646 3.87976 15.9763 3.98659L25.1803 8.58037L14.0166 30.8641L4.81267 26.2703C4.63264 26.1798 4.47224 26.0548 4.34063 25.9024C4.20902 25.75 4.10879 25.5732 4.04567 25.3821ZM60.2512 52.6577L36.8348 46.8121L16.6628 32.4298L28.2981 9.18139L48.451 3.87557L59.8486 6.8845H54.587C54.1875 6.88412 53.8036 7.03932 53.517 7.31708L35.9911 24.2873C35.5034 24.7742 35.1315 25.3643 34.903 26.014C34.6746 26.6637 34.5953 27.3563 34.6712 28.0407C34.747 28.7251 34.976 29.3837 35.3412 29.9678C35.7065 30.5519 36.1986 31.0466 36.7811 31.4153C44.4051 36.2809 53.7049 35.2435 60.8111 28.8083L73.7619 39.1673L60.2512 52.6577ZM92.8486 25.3821C92.7855 25.5732 92.6853 25.75 92.5537 25.9024C92.4221 26.0548 92.2617 26.1798 92.0816 26.2703L82.8777 30.8641L71.7217 8.58037L80.9257 3.98659C81.2878 3.81059 81.7047 3.7838 82.0864 3.91201C82.4681 4.04021 82.784 4.31313 82.9659 4.67183L92.7566 24.2146C92.9436 24.5752 92.9795 24.9951 92.8563 25.3821H92.8486ZM48.428 63.924C48.3428 64.2531 48.1504 64.5446 47.881 64.7526C47.6116 64.9605 47.2805 65.073 46.94 65.0724C46.8108 65.073 46.682 65.0575 46.5565 65.0265L30.5723 61.0337C30.385 60.988 30.2081 60.9075 30.0507 60.7964L19.9494 53.588C19.6183 53.3519 19.3947 52.9943 19.3278 52.5937C19.261 52.1931 19.3562 51.7823 19.5927 51.4519C19.8292 51.1214 20.1875 50.8982 20.5888 50.8315C20.9901 50.7647 21.4016 50.8598 21.7326 51.0959L31.5962 58.1282L47.3197 62.052C47.516 62.1016 47.7006 62.1894 47.8627 62.3105C48.0249 62.4316 48.1614 62.5835 48.2645 62.7575C48.3675 62.9316 48.435 63.1243 48.4631 63.3245C48.4911 63.5247 48.4792 63.7284 48.428 63.924Z"
            fill="black"/>
    </svg>

}

const Wechat = () => {
    return <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.499 14.973C16.499 15.2696 16.411 15.5597 16.2462 15.8063C16.0814 16.053 15.8471 16.2453 15.573 16.3588C15.2989 16.4723 14.9973 16.502 14.7063 16.4442C14.4154 16.3863 14.1481 16.2434 13.9383 16.0336C13.7285 15.8239 13.5857 15.5566 13.5278 15.2656C13.4699 14.9746 13.4996 14.673 13.6132 14.399C13.7267 14.1249 13.919 13.8906 14.1656 13.7258C14.4123 13.5609 14.7023 13.473 14.999 13.473C15.3968 13.473 15.7783 13.631 16.0596 13.9123C16.3409 14.1936 16.499 14.5752 16.499 14.973ZM21.999 13.473C21.7023 13.473 21.4123 13.5609 21.1656 13.7258C20.919 13.8906 20.7267 14.1249 20.6132 14.399C20.4996 14.673 20.4699 14.9746 20.5278 15.2656C20.5857 15.5566 20.7285 15.8239 20.9383 16.0336C21.1481 16.2434 21.4154 16.3863 21.7063 16.4442C21.9973 16.502 22.2989 16.4723 22.573 16.3588C22.8471 16.2453 23.0814 16.053 23.2462 15.8063C23.411 15.5597 23.499 15.2696 23.499 14.973C23.499 14.5752 23.3409 14.1936 23.0596 13.9123C22.7783 13.631 22.3968 13.473 21.999 13.473ZM28.4165 23.9067C28.5181 24.2515 28.5249 24.6174 28.4361 24.9657C28.3474 25.3141 28.1664 25.6321 27.9122 25.8862C27.6581 26.1404 27.3401 26.3214 26.9917 26.4101C26.6434 26.4989 26.2775 26.4921 25.9327 26.3905L22.844 25.4817C21.6263 26.069 20.3022 26.4033 18.9517 26.4644C17.6012 26.5254 16.2523 26.3121 14.9866 25.8371C13.7209 25.3622 12.5647 24.6355 11.5877 23.7011C10.6108 22.7666 9.83347 21.6438 9.30273 20.4005C8.20927 20.2719 7.14501 19.9614 6.15398 19.4817L3.06523 20.3905C2.72041 20.4921 2.35459 20.4989 2.00624 20.4101C1.65789 20.3214 1.3399 20.1404 1.08571 19.8862C0.831525 19.6321 0.650545 19.3141 0.561812 18.9657C0.473079 18.6174 0.479873 18.2515 0.581479 17.9067L1.49023 14.818C0.920291 13.6188 0.594863 12.3181 0.532931 10.9918C0.470999 9.66556 0.673802 8.34023 1.12951 7.09315C1.58522 5.84608 2.2847 4.70224 3.18716 3.72837C4.08962 2.7545 5.17698 1.97009 6.38581 1.42091C7.59463 0.871733 8.90072 0.568777 10.2279 0.529719C11.555 0.49066 12.8767 0.716282 14.1157 1.19342C15.3547 1.67056 16.4863 2.38966 17.4445 3.30878C18.4027 4.22789 19.1682 5.32861 19.6965 6.54672C21.276 6.73706 22.7873 7.30152 24.1049 8.1932C25.4224 9.08488 26.5082 10.2781 27.2721 11.6736C28.0359 13.0692 28.4558 14.6269 28.4968 16.2173C28.5378 17.8077 28.1987 19.3849 27.5077 20.818L28.4165 23.9067ZM8.66148 18.2605C8.41415 16.9058 8.44948 15.5146 8.76527 14.1743C9.08106 12.8339 9.67049 11.5732 10.4966 10.4715C11.3226 9.36968 12.3675 8.45054 13.5656 7.77171C14.7638 7.09287 16.0893 6.66901 17.459 6.52673C16.9521 5.60641 16.2689 4.79494 15.4484 4.13866C14.6279 3.48238 13.6861 2.99413 12.6769 2.7018C10.6387 2.11141 8.44952 2.35486 6.59085 3.3786C4.73218 4.40234 3.35632 6.1225 2.76593 8.16067C2.17554 10.1988 2.41899 12.3881 3.44273 14.2467C3.56585 14.4769 3.59411 14.746 3.52148 14.9967L2.49898 18.473L5.96898 17.4517C6.21968 17.3791 6.48884 17.4074 6.71898 17.5305C7.33171 17.8578 7.9848 18.1033 8.66148 18.2605ZM25.5552 20.2467C26.4598 18.555 26.7264 16.5944 26.3063 14.7226C25.8862 12.8507 24.8074 11.1921 23.2665 10.0492C21.7257 8.90622 19.8255 8.35504 17.9122 8.4961C15.999 8.63715 14.2001 9.46105 12.8436 10.8176C11.4871 12.1741 10.6632 13.973 10.5221 15.8862C10.381 17.7995 10.9322 19.6997 12.0752 21.2405C13.2181 22.7814 14.8767 23.8602 16.7486 24.2803C18.6204 24.7004 20.581 24.4338 22.2727 23.5292C22.5029 23.4061 22.772 23.3778 23.0227 23.4505L26.499 24.473L25.4777 21.003C25.403 20.7505 25.4308 20.4788 25.5552 20.2467Z"
            fill="white"/>
    </svg>

}

const Whatsapp = () => {
    return <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.4516 15.605L16.4516 13.605C16.2941 13.5265 16.1188 13.491 15.9432 13.502C15.7676 13.5129 15.598 13.57 15.4516 13.6675L13.6153 14.8925C12.7724 14.4291 12.0787 13.7354 11.6153 12.8925L12.8403 11.0562C12.9378 10.9098 12.9949 10.7402 13.0059 10.5646C13.0168 10.3891 12.9813 10.2137 12.9028 10.0562L10.9028 6.05625C10.8199 5.88884 10.6918 5.748 10.533 5.64968C10.3741 5.55137 10.1909 5.49952 10.0041 5.5C8.67801 5.5 7.40624 6.02678 6.46855 6.96447C5.53087 7.90215 5.00409 9.17392 5.00409 10.5C5.0074 13.4164 6.16738 16.2123 8.22957 18.2745C10.2918 20.3367 13.0877 21.4967 16.0041 21.5C16.6607 21.5 17.3109 21.3707 17.9175 21.1194C18.5241 20.8681 19.0753 20.4998 19.5396 20.0355C20.0039 19.5712 20.3722 19.02 20.6235 18.4134C20.8748 17.8068 21.0041 17.1566 21.0041 16.5C21.0042 16.3142 20.9526 16.1321 20.855 15.974C20.7574 15.8159 20.6177 15.6881 20.4516 15.605ZM16.0041 19.5C13.618 19.4974 11.3303 18.5483 9.64305 16.861C7.9558 15.1738 7.00674 12.8861 7.00409 10.5C7.0039 9.8064 7.24404 9.13416 7.68367 8.59768C8.12329 8.0612 8.73523 7.69362 9.41534 7.5575L10.8503 10.4325L9.62909 12.25C9.53783 12.3869 9.48176 12.5442 9.46584 12.7079C9.44992 12.8717 9.47465 13.0368 9.53784 13.1888C10.2533 14.8892 11.6061 16.242 13.3066 16.9575C13.459 17.0235 13.6254 17.0505 13.7908 17.0361C13.9562 17.0217 14.1154 16.9663 14.2541 16.875L16.0803 15.6575L18.9553 17.0925C18.8182 17.7734 18.449 18.3856 17.9108 18.8247C17.3725 19.2637 16.6987 19.5024 16.0041 19.5ZM13.0041 0.5C10.7597 0.499511 8.55336 1.08011 6.5999 2.18529C4.64645 3.29046 3.0124 4.88256 1.8568 6.80662C0.70121 8.73069 0.0634407 10.9212 0.00557365 13.1648C-0.0522934 15.4085 0.471713 17.6289 1.52659 19.61L0.107839 23.8662C-0.00968044 24.2186 -0.0267353 24.5968 0.058586 24.9583C0.143907 25.3199 0.328233 25.6505 0.590903 25.9132C0.853573 26.1759 1.18421 26.3602 1.54575 26.4455C1.90729 26.5308 2.28545 26.5138 2.63784 26.3962L6.89409 24.9775C8.63755 25.9048 10.5694 26.4228 12.5429 26.492C14.5164 26.5613 16.4798 26.18 18.2839 25.3772C20.0881 24.5743 21.6857 23.371 22.9553 21.8586C24.225 20.3462 25.1335 18.5644 25.6117 16.6484C26.09 14.7325 26.1255 12.7328 25.7155 10.801C25.3055 8.86934 24.4609 7.05642 23.2456 5.4999C22.0304 3.94337 20.4765 2.68415 18.702 1.81782C16.9274 0.951486 14.9788 0.50081 13.0041 0.5ZM13.0041 24.5C11.0703 24.5013 9.17046 23.9921 7.49659 23.0238C7.37403 22.9527 7.23777 22.9085 7.09684 22.894C6.9559 22.8796 6.81351 22.8953 6.67909 22.94L2.00409 24.5L3.56284 19.825C3.60777 19.6907 3.62365 19.5483 3.60943 19.4074C3.59521 19.2665 3.55121 19.1301 3.48034 19.0075C2.2678 16.9111 1.78097 14.4732 2.09538 12.072C2.40978 9.67068 3.50783 7.44027 5.2192 5.72674C6.93057 4.01321 9.15958 2.91234 11.5605 2.5949C13.9613 2.27747 16.3999 2.76122 18.4978 3.97111C20.5956 5.18099 22.2356 7.04939 23.1633 9.28644C24.0909 11.5235 24.2544 14.0042 23.6284 16.3436C23.0023 18.6831 21.6217 20.7505 19.7008 22.2253C17.7798 23.7 15.4259 24.4996 13.0041 24.5Z"
            fill="white"/>
    </svg>

}

const Telegram = () => {
    return <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M28.1107 0.27352C27.9558 0.139731 27.7673 0.0507517 27.5655 0.0161696C27.3637 -0.0184126 27.1564 0.00271312 26.9657 0.0772705L1.63321 9.99102C1.27419 10.1306 0.970242 10.3831 0.767118 10.7104C0.563994 11.0377 0.472692 11.4221 0.506956 11.8058C0.541221 12.1895 0.699198 12.5516 0.957105 12.8378C1.21501 13.1239 1.55889 13.3185 1.93696 13.3923L8.50071 14.681V21.9998C8.49942 22.3984 8.61789 22.7883 8.84076 23.1188C9.06364 23.4493 9.38065 23.7053 9.75071 23.8535C10.1202 24.0044 10.5265 24.0406 10.9169 23.9575C11.3072 23.8743 11.6635 23.6756 11.9395 23.3873L15.1045 20.1048L20.1257 24.4998C20.488 24.8211 20.9552 24.9989 21.4395 24.9998C21.6517 24.9996 21.8625 24.9663 22.0645 24.901C22.3944 24.7963 22.6911 24.607 22.9252 24.352C23.1592 24.0969 23.3223 23.785 23.3982 23.4473L28.472 1.37477C28.5173 1.17571 28.5077 0.968046 28.4441 0.774046C28.3804 0.580046 28.2652 0.407022 28.1107 0.27352ZM20.4682 4.77352L9.26946 12.7935L3.06946 11.5773L20.4682 4.77352ZM10.5007 21.9998V16.0648L13.5995 18.7823L10.5007 21.9998ZM21.442 22.9998L11.107 13.9373L25.982 3.27602L21.442 22.9998Z"
            fill="white"/>
    </svg>

}

const MenuIcon = () => {
    return <svg className={'w-10 h-10'} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000"
                viewBox="0 0 256 256">
        <path
            d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
    </svg>
}
