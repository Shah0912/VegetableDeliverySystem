--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry, geography, and raster spatial types and functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cart; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.cart (
    customerid character varying(255) NOT NULL
);


ALTER TABLE public.cart OWNER TO dbadmin;

--
-- Name: crop_id_seq; Type: SEQUENCE; Schema: public; Owner: dbadmin
--

CREATE SEQUENCE public.crop_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.crop_id_seq OWNER TO dbadmin;

--
-- Name: crop; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.crop (
    cropid character varying(255) DEFAULT ('C'::text || nextval('public.crop_id_seq'::regclass)) NOT NULL,
    farmerid character varying(255) NOT NULL,
    rate integer NOT NULL,
    name character varying(255) NOT NULL,
    farmsize integer NOT NULL,
    farmage integer NOT NULL,
    type character varying(255) NOT NULL,
    season character varying(255) NOT NULL,
    completed integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.crop OWNER TO dbadmin;

--
-- Name: crops_gis; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.crops_gis (
    id integer NOT NULL,
    name_of_ci character varying(254),
    state_code bigint,
    state_name character varying(254),
    lat numeric,
    long numeric,
    "types of c" character varying(254),
    "farm sizea" bigint,
    "area of cr" bigint
);


ALTER TABLE public.crops_gis OWNER TO dbadmin;

--
-- Name: crops_gis_id_seq; Type: SEQUENCE; Schema: public; Owner: dbadmin
--

CREATE SEQUENCE public.crops_gis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.crops_gis_id_seq OWNER TO dbadmin;

--
-- Name: crops_gis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbadmin
--

ALTER SEQUENCE public.crops_gis_id_seq OWNED BY public.crops_gis.id;


--
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: dbadmin
--

CREATE SEQUENCE public.customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_id_seq OWNER TO dbadmin;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.customer (
    customer_rating character varying(10) DEFAULT '0'::character varying,
    nor integer DEFAULT 0,
    customerid character varying(255) DEFAULT ('C'::text || nextval('public.customer_id_seq'::regclass)) NOT NULL,
    name character varying(255) NOT NULL,
    date_of_birth date NOT NULL,
    street character varying(255) NOT NULL,
    state character varying(255) NOT NULL,
    pincode character varying(7) NOT NULL,
    locality character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    email public.citext,
    latitude character varying(255),
    longitude character varying(255)
);


ALTER TABLE public.customer OWNER TO dbadmin;

--
-- Name: customer_phone_number; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.customer_phone_number (
    phone_number character varying(10) NOT NULL,
    customerid character varying(255) NOT NULL
);


ALTER TABLE public.customer_phone_number OWNER TO dbadmin;

--
-- Name: delivery_person_id_seq; Type: SEQUENCE; Schema: public; Owner: dbadmin
--

CREATE SEQUENCE public.delivery_person_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.delivery_person_id_seq OWNER TO dbadmin;

--
-- Name: delivery_person; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.delivery_person (
    delivery_person_rating character varying(10) DEFAULT '0'::character varying,
    nor integer DEFAULT 0,
    deliveryid character varying(255) DEFAULT ('D'::text || nextval('public.delivery_person_id_seq'::regclass)) NOT NULL,
    name character varying(255) NOT NULL,
    date_of_birth date NOT NULL,
    street character varying(255) NOT NULL,
    state character varying(255) NOT NULL,
    pincode character varying(7) NOT NULL,
    locality character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    vehicleid character varying(255),
    email public.citext,
    latitude character varying(255),
    longitude character varying(255)
);


ALTER TABLE public.delivery_person OWNER TO dbadmin;

--
-- Name: farmer_id_seq; Type: SEQUENCE; Schema: public; Owner: dbadmin
--

CREATE SEQUENCE public.farmer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.farmer_id_seq OWNER TO dbadmin;

--
-- Name: farmer; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.farmer (
    farmerid character varying(255) DEFAULT ('F'::text || nextval('public.farmer_id_seq'::regclass)) NOT NULL,
    name character varying(255) NOT NULL,
    date_of_birth date NOT NULL,
    farmer_rating character varying(10) DEFAULT '0'::character varying,
    nor integer DEFAULT 0,
    street character varying(255) NOT NULL,
    state character varying(255) NOT NULL,
    locality character varying(255) NOT NULL,
    pincode character varying(7) NOT NULL,
    password character varying(255) NOT NULL,
    email public.citext,
    latitude character varying(255),
    longitude character varying(255)
);


ALTER TABLE public.farmer OWNER TO dbadmin;

--
-- Name: farmer_phone_number; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.farmer_phone_number (
    phone_number character varying(10) NOT NULL,
    farmerid character varying(255) NOT NULL
);


ALTER TABLE public.farmer_phone_number OWNER TO dbadmin;

--
-- Name: feedback; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.feedback (
    friendliness integer NOT NULL,
    knowledge integer NOT NULL,
    type integer NOT NULL,
    efficiency integer NOT NULL,
    comment character varying(255) NOT NULL,
    quality integer NOT NULL,
    reviewee character varying(10) NOT NULL
);


ALTER TABLE public.feedback OWNER TO dbadmin;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: dbadmin
--

CREATE SEQUENCE public.order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_id_seq OWNER TO dbadmin;

--
-- Name: ordered; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.ordered (
    cropid character varying(255) NOT NULL,
    farmerid character varying(255) NOT NULL,
    orderid character varying(255) NOT NULL,
    amount integer NOT NULL
);


ALTER TABLE public.ordered OWNER TO dbadmin;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.orders (
    orderid character varying(255) DEFAULT ('O'::text || nextval('public.order_id_seq'::regclass)) NOT NULL,
    price integer NOT NULL,
    customerid character varying(255),
    deliveryid character varying(255),
    status integer DEFAULT 0
);


ALTER TABLE public.orders OWNER TO dbadmin;

--
-- Name: storage; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.storage (
    capacity integer NOT NULL,
    state character varying(255) NOT NULL,
    street character varying(255) NOT NULL,
    pincode character varying(7) NOT NULL,
    locality character varying(255) NOT NULL,
    latitude character varying(255),
    longitude character varying(255),
    farmerid character varying(255) NOT NULL
);


ALTER TABLE public.storage OWNER TO dbadmin;

--
-- Name: temporder; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.temporder (
    cropid character varying(255) NOT NULL,
    farmerid character varying(255) NOT NULL,
    customerid character varying(255) NOT NULL,
    amount integer NOT NULL
);


ALTER TABLE public.temporder OWNER TO dbadmin;

--
-- Name: vehicle_id; Type: SEQUENCE; Schema: public; Owner: dbadmin
--

CREATE SEQUENCE public.vehicle_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vehicle_id OWNER TO dbadmin;

--
-- Name: vehicles; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE public.vehicles (
    vehicleid character varying(255) DEFAULT ('V'::text || nextval('public.vehicle_id'::regclass)) NOT NULL,
    vehicleno character varying(255) NOT NULL,
    volume_capacity integer NOT NULL,
    licence_number character varying(255) NOT NULL,
    type character varying(20) NOT NULL
);


ALTER TABLE public.vehicles OWNER TO dbadmin;

--
-- Name: crops_gis id; Type: DEFAULT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.crops_gis ALTER COLUMN id SET DEFAULT nextval('public.crops_gis_id_seq'::regclass);


--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.cart (customerid) FROM stdin;
C101
\.


--
-- Data for Name: crop; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.crop (cropid, farmerid, rate, name, farmsize, farmage, type, season, completed) FROM stdin;
C109	F104	222	eee	112	222	ee	e	1
C108	F104	50	Potat	2	2	Seasonal	Winter	1
C101	F104	50	Potato	2	2	Seasonal	Winter	1
C102	F104	4	Test	8	5	sasds	sasds	1
C105	F104	50	Potato	2	2	Seasonal	Winter	1
C103	F104	10	Onion	1	1	100	1	1
C106	F104	50	Potato	2	2	Seasonal	Winter	1
C104	F104	3	sfsf	1	2	Test	Test	1
C110	F112	3	a	3	2	Test	Test	1
C111	F104	3	TEST	3	4	sasds	Test	1
C107	F104	50	Potat	2	2	Seasonal	Winter	1
C112	F104	4	dd	2	3	sasds	Test	1
C113	F104	50	Tomato	5	5	Organic	Winter	1
C114	F104	10	Carrot	5	5	Organic	Winter	1
\.


--
-- Data for Name: crops_gis; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.crops_gis (id, name_of_ci, state_code, state_name, lat, long, "types of c", "farm sizea", "area of cr") FROM stdin;
1	Port Blair	35	ANDAMAN & NICOBAR ISLANDS	92.7264828	11.6233774	Island Purslane	72	62
2	Adilabad	28	ANDHRA PRADESH	79.560344	19.0809075	Navel Lichen	76	28
3	Adoni	28	ANDHRA PRADESH	77.2728368	15.6322227	Muir's Raillardiopsis	79	10
4	Anantapur	28	ANDHRA PRADESH	77.6005911	14.6818877	Chia	79	34
5	Bhimavaram	28	ANDHRA PRADESH	81.521241	16.544893	Freckled Milkvetch	69	47
6	Chilakaluripet	28	ANDHRA PRADESH	80.1623948	16.0924301	Hybrid Oak	79	15
7	Chittoor	28	ANDHRA PRADESH	79.1010442	13.2218054	Birdnest Milkvetch	82	28
8	Dharmavaram	28	ANDHRA PRADESH	77.7126189	14.4137447	Jaguey	76	61
9	Eluru	28	ANDHRA PRADESH	81.0952431	16.7106604	Jones' Selenia	78	44
10	Greater Hyderabad	28	ANDHRA PRADESH	78.4867	17.385	Nevada Pussypaws	86	42
11	Gudivada	28	ANDHRA PRADESH	80.9926327	16.4410255	Sand Muhly	72	34
12	Guntakal	28	ANDHRA PRADESH	77.3736238	15.1674091	Blue Skin Lichen	79	40
13	Guntur	28	ANDHRA PRADESH	80.4365402	16.3066525	Santa Barbara Honeysuckle	74	20
14	Hindupur	28	ANDHRA PRADESH	77.4988753	13.8185378	Velvet Stickseed	65	63
15	Kadapa	28	ANDHRA PRADESH	78.8241339	14.4673541	Truckee Lewisia	78	38
16	Kakinada	28	ANDHRA PRADESH	82.2474648	16.9890648	Hilo Murainagrass	86	61
17	Karimnagar	28	ANDHRA PRADESH	79.1288412	18.4385553	Tussock Grass	90	33
18	Khammam	28	ANDHRA PRADESH	80.1514447	17.2472528	Lecidea Lichen	87	65
19	Kurnool	28	ANDHRA PRADESH	78.0372792	15.8281257	Sphagnum	85	43
20	Machilipatnam	28	ANDHRA PRADESH	81.1361543	16.1905457	Margarett's Myrcia	84	64
21	Madanapalle	28	ANDHRA PRADESH	78.5036065	13.5603491	Mouseear Hawkweed	78	12
22	Mahbubnagar	28	ANDHRA PRADESH	78.0081221	16.7375089	Black Mangrove	77	10
23	Miryalaguda	28	ANDHRA PRADESH	79.5659633	16.8753106	Oblongleaf Snakeherb	65	36
24	Nalgonda	28	ANDHRA PRADESH	79.2620294	17.0575707	Christmas Cactus	79	14
25	Nandyal	28	ANDHRA PRADESH	78.4830934	15.4785694	Udo	80	28
26	Narasaraopet	28	ANDHRA PRADESH	80.0479039	16.2353506	Wharton's Dewberry	90	48
27	Nellore	28	ANDHRA PRADESH	79.986456	14.4425987	Narrow-petal Rein Orchid	84	52
28	Nizamabad	28	ANDHRA PRADESH	78.0940867	18.6725047	Cooper's Goldenbush	86	25
29	Ongole	28	ANDHRA PRADESH	80.049922	15.5057232	Hollyleaf Fringedfern	67	15
30	Proddatur	28	ANDHRA PRADESH	78.5531577	14.7491864	Palaquium	85	23
31	Rajahmundry	28	ANDHRA PRADESH	81.8040345	17.0005383	Hog Plum	71	29
32	Ramagundam	28	ANDHRA PRADESH	79.4816378	18.7595503	Yuba Pass Willowherb	68	51
33	Secunderabad	28	ANDHRA PRADESH	78.4982741	17.4399295	Bonpland's Croton	69	39
34	Srikakulam	28	ANDHRA PRADESH	84.0167423	18.4285005	Florida Whitetop	66	24
35	Suryapet	28	ANDHRA PRADESH	79.6333674	17.1353148	Carolina Coralbead	89	35
36	Tadepalligudem	28	ANDHRA PRADESH	81.521241	16.8138415	Money Croton	73	28
37	Tadpatri	28	ANDHRA PRADESH	78.0092703	14.9070274	New Mexico Xanthoparmelia Lichen	68	22
38	Tenali	28	ANDHRA PRADESH	80.6493396	16.2395313	Northern Jacob's-ladder	66	28
39	Tirupati	28	ANDHRA PRADESH	79.4191795	13.6287557	Rock Goldenrod	72	20
40	Vijayawada	28	ANDHRA PRADESH	80.6480153	16.5061743	Vateria	66	52
41	Visakhapatnam	28	ANDHRA PRADESH	83.2185	17.6868	Leafless Ghostplant	78	44
42	Vizianagaram	28	ANDHRA PRADESH	83.3955506	18.1066576	Yellow Necklacepod	79	38
43	Warangal	28	ANDHRA PRADESH	79.5940544	17.9689008	Cliff Desertdandelion	85	24
44	Dibrugarh	18	ASSAM	94.9119621	27.4728327	Fig	69	51
45	Guwahati	18	ASSAM	91.7362365	26.1445169	Ironweed	77	34
46	Nagaon	18	ASSAM	92.6840426	26.3463713	Carolina Horsenettle	81	18
47	Silchar	18	ASSAM	92.7789054	24.8332708	Arctic Stitchwort	77	58
48	Arrah	10	BIHAR	84.6603307	25.5560443	Maricao Pricklyash	88	54
49	Aurangabad	10	BIHAR	84.3804888	24.7457189	Flower's Orthotrichum Moss	72	31
50	Bagaha	10	BIHAR	84.0722375	27.1221959	Humboldt's Aspicilia	81	23
51	Begusarai	10	BIHAR	86.1293792	25.416675	Wild Quinine	80	57
52	Bettiah	10	BIHAR	84.5169757	26.8028048	Texas Seapurslane	76	22
53	Bhagalpur	10	BIHAR	86.9824288	25.3478004	Sand Palafox	70	45
54	Biharsharif	10	BIHAR	85.5148735	25.1982147	Northern Mountain Ash	72	35
55	Buxar	10	BIHAR	84.1435136	25.4987785	Heller's Beardtongue	84	31
56	Chapra	10	BIHAR	84.7498886	25.7795649	Struchium	67	19
57	Darbhanga	10	BIHAR	85.896004	26.111868	Sessileflower False Goldenaster	68	54
58	Dehri	10	BIHAR	84.1909841	24.9277351	Flower Axistree	86	32
59	Dinapur Nizamat	10	BIHAR	85.0597137	25.6328264	Pennsylvania Hawthorn	72	43
60	Gaya	10	BIHAR	84.999431	24.7954523	Smooth Pricklypoppy	78	43
61	Hajipur	10	BIHAR	85.2145907	25.6858392	Wall Hawkweed	67	49
62	Jamalpur	10	BIHAR	86.4906091	25.312717	Leafy False Goldenweed	65	17
63	Jehanabad	10	BIHAR	84.981754	25.1515827	Silky Lupine	75	48
64	Katihar	10	BIHAR	87.5718609	25.552048	Creeping Silverback	66	24
65	Kishanganj	10	BIHAR	87.9383822	26.0917422	Windyridge Cyrtandra	76	10
66	Motihari	10	BIHAR	84.9088938	26.6469624	Alpine Willow	68	22
67	Munger	10	BIHAR	86.4735251	25.3747561	Piedmont Mock Bishopweed	68	20
68	Muzaffarpur	10	BIHAR	85.3647201	26.1208876	Rue Of The Mountains	66	52
69	Patna	10	BIHAR	85.1375645	25.5940947	Threadleaf Crowfoot	90	51
70	Purnia	10	BIHAR	87.4752551	25.7771391	Fan Clubmoss	87	58
71	Saharsa	10	BIHAR	86.6006249	25.8834961	Disc Lichen	66	60
72	Sasaram	10	BIHAR	84.0314295	24.949036	Wildginger	65	40
73	Siwan	10	BIHAR	84.3566593	26.2196205	Poorjoe	84	22
74	Chandigarh	4	CHANDIGARH	76.7794179	30.7333148	Palmyra Palm	79	60
75	Ambikapur	22	CHHATTISGARH	83.1817856	23.1354921	Common Woolly Sunflower	90	22
76	Bhilai Nagar	22	CHHATTISGARH	81.3509416	21.1938475	Catillaria Lichen	67	56
77	Bilaspur	22	CHHATTISGARH	82.1391412	22.0796251	Klinggraeff's Bryum Moss	83	51
78	Durg	22	CHHATTISGARH	81.2849169	21.1904494	Hippo Grass	85	15
79	Jagdalpur	22	CHHATTISGARH	82.008014	19.0740973	Tree Stonecrop	84	17
80	Korba	22	CHHATTISGARH	82.7500595	22.3594501	Larch Dwarf Mistletoe	87	40
81	Raigarh	22	CHHATTISGARH	83.3949632	21.8974003	Orange Lichen	88	64
82	Raipur	22	CHHATTISGARH	81.6296413	21.2513844	Gray Saltbush	73	52
83	Rajnandgaon	22	CHHATTISGARH	81.0302222	21.0971034	San Diego Sagewort	85	44
84	Ahmadabad	24	GUJARAT	72.5713621	23.022505	Mountain Pride	71	28
85	Amreli	24	GUJARAT	71.2220832	21.6031774	Kellogg Snapdragon	89	36
86	Anand	24	GUJARAT	72.928871	22.5645175	Tawny Pea	76	53
87	Bharuch	24	GUJARAT	72.9958748	21.7051358	Swamp Colicwood	68	26
88	Bhavnagar	24	GUJARAT	72.1519304	21.7644725	Drummond's Campion	80	54
89	Bhuj	24	GUJARAT	69.6669324	23.2419997	California Nettle	83	53
90	Botad	24	GUJARAT	71.6684269	22.1704232	Ridged Yellow Flax	81	53
91	Deesa	24	GUJARAT	72.1906721	24.2585031	Cactus Apple	71	41
92	Gandhidham	24	GUJARAT	70.133673	23.075297	Avens	81	38
93	Gandhinagar	24	GUJARAT	72.6369415	23.2156354	Pasture Goatsbeard	71	46
94	Godhra	24	GUJARAT	73.6142795	22.7788044	Great Indian Plantain	87	29
95	Gondal	24	GUJARAT	70.792297	21.9619463	Alkaligrass	89	36
96	Jamnagar	24	GUJARAT	70.05773	22.4707019	Tuckahoe Dewberry	78	11
97	Jetpur Navagadh	24	GUJARAT	70.6276279	21.7615246	Spreading Hedgeparsley	81	36
98	Junagadh	24	GUJARAT	70.4578768	21.522184	Fewleaf Thistle	70	57
99	Kalol	24	GUJARAT	72.5086513	23.2463895	Rockcress	81	19
100	Mahesana	24	GUJARAT	72.3693252	23.5879607	Flamevine	88	26
101	Morvi	24	GUJARAT	70.8236195	22.8119895	Stonecrop Gilia	85	46
102	Nadiad	24	GUJARAT	72.8633635	22.6915853	Twobristle Rockdaisy	82	20
103	Navsari	24	GUJARAT	72.9520348	20.9467019	Border Fleabane	67	16
104	Palanpur	24	GUJARAT	72.4330989	24.174051	Heath Cliffrose	74	16
105	Patan	24	GUJARAT	72.1266255	23.8493246	Arrowfeather Threeawn	81	49
106	Porbandar	24	GUJARAT	69.6292654	21.6417069	Foxtail Cactus	70	29
107	Rajkot	24	GUJARAT	70.8021599	22.3038945	Creeping Woodsorrel	74	56
108	Surat	24	GUJARAT	72.8310607	21.1702401	Wedgeleaf Dock	79	51
109	Surendranagar Dudhrej	24	GUJARAT	71.649536	22.7201319	Rocky Ragwort	87	65
110	Vadodara	24	GUJARAT	73.1812187	22.3071588	Rosy Gilia	76	64
111	Valsad	24	GUJARAT	72.9342451	20.5992349	Twocolor Sarcogyne Lichen	90	56
112	Veraval	24	GUJARAT	70.3628516	20.9158979	Brittlebush	79	47
113	Ambala	6	HARYANA	76.7766974	30.3781788	Harrington's Cephalotaxus	88	38
114	Ambala Sadar	6	HARYANA	76.8432663	30.3248708	Heartleaf Twistflower	72	37
115	Bahadurgarh	6	HARYANA	76.9239727	28.6924464	Lavandin	88	49
116	Bhiwani	6	HARYANA	75.9927652	28.7751693	Hairy Gumweed	88	35
117	Faridabad	6	HARYANA	77.3177894	28.4089123	Acrocordia Lichen	82	38
118	Gurgaon	6	HARYANA	77.0266383	28.4594965	Mountain Sandwort	84	59
119	Hisar	6	HARYANA	75.7216527	29.1491875	Selfing Monkeyflower	85	34
120	Jagadhri	6	HARYANA	77.2969204	30.1680858	Pinesap	90	45
121	Jind	6	HARYANA	76.3058328	29.3211153	Sleeping Combseed	89	22
122	Kaithal	6	HARYANA	76.3984537	29.7856734	Prostrate Ceanothus	87	64
123	Karnal	6	HARYANA	76.9904825	29.6856929	Pacific Blacksnakeroot	66	65
124	Palwal	6	HARYANA	77.3320262	28.1487362	Red Rodwood	83	61
125	Panchkula	6	HARYANA	76.860565	30.6942091	Berteron's Rattlebox	70	62
126	Panipat	6	HARYANA	76.9635023	29.3909464	Wart Lichen	71	12
127	Rewari	6	HARYANA	76.6239423	28.1927631	Bolinas Manzanita	69	39
128	Rohtak	6	HARYANA	76.606611	28.8955152	Mojave Woolly Sunflower	79	37
129	Sirsa	6	HARYANA	75.0177029	29.5335931	Orange Lichen	90	64
130	Sonipat	6	HARYANA	77.091281	28.9287735	Haya	85	48
131	Thanesar	6	HARYANA	76.8197522	29.9696148	Malabar Melastome	86	28
132	Yamunanagar	6	HARYANA	77.2673901	30.1290485	Bridger Mountain Alumroot	81	19
133	Shimla	2	HIMACHAL PRADESH	77.1734033	31.1048145	Mosquito Plant	67	19
134	Anantnag	1	JAMMU & KASHMIR	75.1487007	33.7311255	Hydnocarpus	79	23
135	Jammu	1	JAMMU & KASHMIR	74.8570259	32.7266016	Zigzag Clover	66	14
136	Srinagar	1	JAMMU & KASHMIR	74.7972825	34.0836708	Mountain Monardella	89	64
137	Adityapur	20	JHARKHAND	86.1576889	22.7834741	Zulu Fescue	69	27
138	Bokaro Steel City	20	JHARKHAND	86.151112	23.6692956	White Mountain Saxifrage	66	41
139	Chas	20	JHARKHAND	86.1700894	23.6388375	California Hazelnut	84	28
140	Deoghar	20	JHARKHAND	86.6913222	24.4763201	Dixie Goldenrod	86	45
141	Dhanbad	20	JHARKHAND	86.4303859	23.7956531	Sierra Woolly Indian Paintbrush	89	34
142	Giridih	20	JHARKHAND	86.0937312	24.2841482	Bolander's Pohlia Moss	65	17
143	Hazaribag	20	JHARKHAND	85.3691068	23.9966213	Vasey's Rubberweed	84	13
144	Jamshedpur	20	JHARKHAND	86.2028754	22.8045665	Bastardsage	90	23
145	Mango	20	JHARKHAND	86.219577	22.834024	Guinea Yam	72	25
146	Ranchi	20	JHARKHAND	85.309562	23.3440997	Bastard Gregre	85	25
147	Bagalkot	29	KARNATAKA	75.6557206	16.1725355	Arthothelium Lichen	83	57
148	Belgaum	29	KARNATAKA	74.4976741	15.8496953	Roving Pricklypear	86	28
149	Bellary	29	KARNATAKA	76.9214428	15.1393932	Leathery Grapefern	78	26
150	Bengaluru	29	KARNATAKA	77.5946	12.9716	Rio Abajo Spleenwort	76	36
151	Bhadravati	29	KARNATAKA	75.7080727	13.8329901	Narrowleaf Four O'clock	82	20
152	Bidar	29	KARNATAKA	77.5046101	17.9148799	Wingpod Purslane	88	50
153	Bijapur	29	KARNATAKA	75.710031	16.8301708	Orange Honeysuckle	90	61
154	Chikmagalur	29	KARNATAKA	75.7754018	13.315258	Lacebark	81	18
155	Chitradurga	29	KARNATAKA	76.3984537	14.2305594	Perfumed Spiderlily	67	26
156	Davanagere	29	KARNATAKA	75.9238397	14.4663438	Hawai'i False Ohelo	72	17
157	Gadag-Betigeri	29	KARNATAKA	75.6380337	15.4324651	Streambank Flowering Fern	70	57
158	Gangawati	29	KARNATAKA	76.5314817	15.431874	Oriental Mangrove	75	42
159	Gulbarga	29	KARNATAKA	76.8342957	17.329731	Darkthroat Shootingstar	89	61
160	Hassan	29	KARNATAKA	76.0995519	13.0068142	Stinging Serpent	80	45
161	Hospet	29	KARNATAKA	76.3909241	15.2688542	Red Mountain Stonecrop	89	17
162	Hubli-Dharwad	29	KARNATAKA	75.1239547	15.3647083	Wedgeleaf Draba	82	65
163	Kolar	29	KARNATAKA	78.1325611	13.1357446	Moab Milkvetch	84	24
164	Mandya	29	KARNATAKA	76.9009191	12.5221567	Tracy's Silkgrass	66	39
165	Mangalore	29	KARNATAKA	74.8559568	12.9141417	Whitewoolly Buckwheat	88	17
166	Mysore	29	KARNATAKA	76.6393805	12.2958104	Syrian Cephalaria	88	22
167	Raichur	29	KARNATAKA	77.3439283	16.2120031	Rim Lichen	76	64
168	Ranibennur	29	KARNATAKA	75.6382657	14.6113428	Sweetpotato	72	59
169	Robertson Pet	29	KARNATAKA	78.2698622	12.9551189	Lyall's Rockcress	71	26
170	Shimoga	29	KARNATAKA	75.568101	13.9299299	Melaspilea Lichen	74	55
171	Tumkur	29	KARNATAKA	76.6412712	13.3709627	Camphorweed	78	12
172	Udupi	29	KARNATAKA	74.7421427	13.3408807	Threeleaflet Dewberry	89	37
173	Alappuzha	32	KERALA	76.3388484	9.4980667	Shale Barren Evening Primrose	73	25
174	Kochi	32	KERALA	76.2673041	9.9312328	Menzies' Larkspur	87	65
175	Kollam	32	KERALA	76.6141396	8.8932118	Tundra Alkaligrass	85	22
176	Kozhikode	32	KERALA	75.78041	11.2587531	Chinese Haw	80	28
177	Palakkad	32	KERALA	76.6547932	10.7867303	Mceldowney's Cyanea	78	49
178	Thiruvananthapuram	32	KERALA	76.9366376	8.5241391	Twistedstalk	73	37
179	Thrissur	32	KERALA	76.2144349	10.5276416	Frosted Lichen	87	14
180	Betul	23	MADHYA PRADESH	77.9011842	21.9108031	Snow Arnica	67	59
181	Bhind	23	MADHYA PRADESH	78.7476208	26.4450034	Narrowleaf Lespedeza	88	41
182	Bhopal	23	MADHYA PRADESH	77.412615	23.2599333	Chesapeake Blackberry	68	15
183	Burhanpur	23	MADHYA PRADESH	76.2224273	21.3193875	Berlandier's Fiddlewood	90	47
184	Chhattarpur	23	MADHYA PRADESH	79.560344	24.728683	Manyflower Saxifrage	88	33
185	Chhindwara	23	MADHYA PRADESH	78.9381729	22.057437	Arctic Rush	78	62
186	Damoh	23	MADHYA PRADESH	79.4421731	23.8380986	Mielichhofer's Copper Moss	80	35
187	Datia	23	MADHYA PRADESH	78.4609393	25.6653262	Sudetic Lousewort	67	38
188	Dewas	23	MADHYA PRADESH	76.0507949	22.9622672	Tusilla	74	57
189	Guna	23	MADHYA PRADESH	77.2979782	24.6348197	Smooth Phacelia	66	23
190	Gwalior	23	MADHYA PRADESH	78.1828308	26.2182871	Ring Lichen	68	19
191	Hoshangabad	23	MADHYA PRADESH	77.736967	22.744108	Scarlet Cinquefoil	65	47
192	Indore	23	MADHYA PRADESH	75.8577258	22.7195687	Twolobe Larkspur	79	43
193	Jabalpur	23	MADHYA PRADESH	79.9864071	23.181467	American Elm	66	35
194	Khandwa	23	MADHYA PRADESH	76.352571	21.8257334	Featherleaf Kittentails	75	12
195	Khargone	23	MADHYA PRADESH	75.8069082	21.90287	Ceanothus	82	29
196	Mandsaur	23	MADHYA PRADESH	75.0692952	24.076836	Stolon Draba	67	25
197	Morena	23	MADHYA PRADESH	77.9909949	26.4933562	Spotted Beebalm	90	58
198	Murwara	23	MADHYA PRADESH	80.365865	23.7473807	Seaside Kirschsteiniothelia Lichen	72	65
199	Nagda	23	MADHYA PRADESH	75.4169918	23.4454599	Smooth Solomon's Seal	78	52
200	Neemuch	23	MADHYA PRADESH	74.8624092	24.4763852	Nightflowering Wild Petunia	69	41
201	Pithampur	23	MADHYA PRADESH	75.6822899	22.613252	Yellow Streamers	80	10
202	Ratlam	23	MADHYA PRADESH	75.0376325	23.3341696	Florida Lacefern	69	23
203	Rewa	23	MADHYA PRADESH	81.30418	24.5372927	Forest Sandalwood	76	45
204	Sagar	23	MADHYA PRADESH	78.7378068	23.838805	Alaskan Douglasia	70	28
205	Satna	23	MADHYA PRADESH	80.8322428	24.6005075	Parathesis	89	18
206	Sehore	23	MADHYA PRADESH	77.0850781	23.205012	Yellow Bloodleaf	75	38
207	Seoni	23	MADHYA PRADESH	79.5434841	22.0868691	Squirreltail	74	62
208	Shivpuri	23	MADHYA PRADESH	77.665066	25.4357869	Bearded Beggarticks	67	34
209	Singrauli	23	MADHYA PRADESH	82.6645469	24.1992101	Lecidella Lichen	81	35
210	Ujjain	23	MADHYA PRADESH	75.7849097	23.1793013	Small's Blacksnakeroot	71	59
211	Vidisha	23	MADHYA PRADESH	77.8081363	23.5251102	Bluehead Gilia	89	56
212	Achalpur	27	MAHARASHTRA	77.5086754	21.257584	Lemmon's Needlegrass	90	62
213	Ahmadnagar	27	MAHARASHTRA	74.7495916	19.0952075	Sharpleaf Cancerwort	76	52
214	Akola	27	MAHARASHTRA	77.0219019	20.7059345	Dense False Gilyflower	88	29
215	Ambarnath	27	MAHARASHTRA	73.1926023	19.1825167	Leafflower	72	27
216	Amravati	27	MAHARASHTRA	77.7795513	20.9374238	Karwinskia	77	65
217	Aurangabad	27	MAHARASHTRA	75.3433139	19.8761653	Surinam Cherry	88	18
218	Badlapur	27	MAHARASHTRA	73.2367896	19.1667854	Andreaea Moss	68	29
219	Barshi	27	MAHARASHTRA	75.6941478	18.2333856	Ground-crescent Milkvetch	87	10
220	Bhiwandi	27	MAHARASHTRA	73.0482912	19.2812547	Rough Hedgenettle	88	61
221	Bhusawal	27	MAHARASHTRA	75.8010962	21.0455204	Iberian Spirea	71	19
222	Bid	27	MAHARASHTRA	75.7600785	18.9890893	Common Twinpod	72	27
223	Chandrapur	27	MAHARASHTRA	79.3014845	19.9704597	Lindheimer's Indigo	76	35
224	Dhule	27	MAHARASHTRA	74.7748979	20.9042201	Red Turtlehead	85	43
225	Gondiya	27	MAHARASHTRA	80.2209773	21.4624491	Littleseed Canarygrass	87	60
226	Greater Mumbai	27	MAHARASHTRA	72.8777	19.076	Tubercle Twistedstalk	89	19
227	Hinganghat	27	MAHARASHTRA	78.8411405	20.5505728	Manycolored Lupine	86	36
228	Ichalkaranji	27	MAHARASHTRA	74.4560807	16.7090008	Hairy Sunflower	66	62
229	Jalgaon	27	MAHARASHTRA	75.5626039	21.0076578	Licania	68	64
230	Jalna	27	MAHARASHTRA	75.8800305	19.8296893	Muhly	75	24
231	Kolhapur	27	MAHARASHTRA	74.2432527	16.7049873	Rosewood	68	34
232	Latur	27	MAHARASHTRA	76.5603828	18.4087934	Hybrid Ladyslipper	78	51
233	Malegaon	27	MAHARASHTRA	74.5100291	20.5547497	Martagon Lily	80	59
234	Mira Bhayander	27	MAHARASHTRA	72.8543897	19.2952325	Ocala Blackberry	88	22
235	Nagpur	27	MAHARASHTRA	79.0881546	21.1458004	Sweetvetch	68	18
236	Nanded Waghala	27	MAHARASHTRA	77.303723	19.1428869	Hybrid Sedge	66	40
237	Nandurbar	27	MAHARASHTRA	74.123996	21.7468548	Fahkahatchee Bluethread	75	41
238	Nashik	27	MAHARASHTRA	73.7898023	19.9974533	Snakewood	84	28
239	Navi Mumbai	27	MAHARASHTRA	73.0296625	19.0330488	Stroganowia	67	35
240	Navi Mumbai Panvel Raigarh	27	MAHARASHTRA	73.1175162	18.9894007	Bristly Jewelflower	89	51
241	Osmanabad	27	MAHARASHTRA	76.1783739	18.2069636	Brunswickgrass	78	33
242	Panvel	27	MAHARASHTRA	73.1175162	18.9894007	Siskiyou Mountain Ragwort	78	28
243	Parbhani	27	MAHARASHTRA	76.776665	19.2609958	Blue Lupine	79	40
244	Pimpri Chinchwad	27	MAHARASHTRA	73.7997094	18.6297811	Single Threeawn	79	14
245	Pune	27	MAHARASHTRA	73.8567437	18.5204303	Silky Thatching Grass	83	19
246	Sangli Miraj Kupwad	27	MAHARASHTRA	74.6049061	16.8541887	Bejuco De Alambre	79	54
247	Satara	27	MAHARASHTRA	74.018261	17.6804639	Trumpet	87	31
248	Solapur	27	MAHARASHTRA	75.9063906	17.6599188	Longleaf False Goldeneye	79	24
249	Thane	27	MAHARASHTRA	72.9780897	19.2183307	Rinodina Lichen	89	56
250	Udgir	27	MAHARASHTRA	77.1126009	18.3942882	Ponderosa Violet	86	49
251	Ulhasnagar	27	MAHARASHTRA	73.1644628	19.2215115	Haitian Catalpa	76	58
252	Vasai Virar City	27	MAHARASHTRA	72.8397317	19.3919275	Cancer-root	90	11
253	Wardha	27	MAHARASHTRA	78.6021946	20.745319	Branched Porterweed	79	59
254	Yavatmal	27	MAHARASHTRA	78.1204073	20.3887937	Two-leaf Vetch	80	26
255	Imphal	14	MANIPUR	93.9368439	24.8170111	Puerto Rico Jumby Pepper	87	38
256	Shillong	17	MEGHALAYA	91.8848	25.5714	Bank Catclaw	73	15
257	Aizawl	15	MIZORAM	92.7176389	23.727107	Cortez's Croton	84	56
258	Dimapur	13	NAGALAND	93.7536663	25.8629885	California Helianthella	81	14
259	Bhalswa Jahangir Pur	7	NCT OF DELHI	77.1544	28.757322	Shortspur Seablush	69	49
260	Burari	7	NCT OF DELHI	77.1948241	28.7535212	Common Twinpod	87	14
261	Dallo Pura	7	NCT OF DELHI	77.319462	28.6004677	Broadleaf Wild Leek	82	21
262	Delhi	7	NCT OF DELHI	77.1025	28.7041	Betonyleaf Thoroughwort	81	57
263	Delhi Cantonment	7	NCT OF DELHI	77.1587375	28.5961279	Leafy Rockdaisy	66	23
264	Deoli	7	NCT OF DELHI	77.2376414	28.4962152	Lakeshore Bulrush	82	10
265	Gokal Pur	7	NCT OF DELHI	77.2840105	28.703423	Wedgeleaf Horkelia	80	61
266	Hastsal	7	NCT OF DELHI	77.0490264	28.6377129	Marsh Seedbox	65	37
267	Karawal Nagar	7	NCT OF DELHI	77.276926	28.7283102	Hairy Kittentails	75	28
268	Kirari Suleman Nagar	7	NCT OF DELHI	77.0643614	28.6967948	White Heath Aster	82	50
269	Mandoli	7	NCT OF DELHI	77.313921	28.7041396	Navajo Yucca	86	49
270	Mustafabad	7	NCT OF DELHI	77.2681086	28.7113968	Idaho Buttercup	67	38
271	Nangloi Jat	7	NCT OF DELHI	77.0632942	28.6841206	Wireleaf Dropseed	87	47
272	New Delhi	7	NCT OF DELHI	77.209	28.6139	New Jersey Muhly	89	44
273	Sultan Pur Majra	7	NCT OF DELHI	77.0805496	28.6958531	Marginate Splashzone Moss	66	37
274	Baleshwar Town	21	ORISSA	86.9246005	21.4869337	Showy Draba	69	29
275	Baripada Town	21	ORISSA	86.7516942	21.9322338	Green Arrow Arum	84	27
276	Bhadrak	21	ORISSA	86.4958396	21.0582737	Cucumberleaf Sunflower	71	40
277	Bhubaneswar Town	21	ORISSA	85.8245398	20.2960587	Lowland Bladderfern	86	40
278	Brahmapur Town	21	ORISSA	84.7940911	19.3149618	Silvery Sedge	81	15
279	Cuttack	21	ORISSA	85.8829895	20.462521	Common Woolly Sunflower	77	15
280	Puri	21	ORISSA	85.8314655	19.8133822	Eugeissona	79	58
281	Raurkela Industrial Township	21	ORISSA	84.8620054	22.1993143	Florida Spiderlily	76	48
282	Raurkela Town	21	ORISSA	84.8535844	22.260423	Plumed Clover	67	57
283	Sambalpur	21	ORISSA	83.9811665	21.4668716	Scrub Palmetto	83	14
284	Ozhukarai	34	PUDUCHERRY	79.7793932	11.9475611	Greenman's Biscuitroot	75	58
285	Puducherry	34	PUDUCHERRY	79.8144722	11.9138598	American Muskwood	68	49
286	Abohar	3	PUNJAB	74.1993043	30.1452928	Mountain Aster	70	18
287	Amritsar	3	PUNJAB	74.8722642	31.6339793	Pareira	88	13
288	Barnala	3	PUNJAB	75.5467979	30.3819446	Oatgrass	74	27
289	Batala	3	PUNJAB	75.2070644	31.8183238	Philodendron	76	32
290	Bathinda	3	PUNJAB	74.9454745	30.210994	Tubeflower Bluecup	65	41
291	Firozpur	3	PUNJAB	74.6224755	30.9331348	Widelip Orchid	78	45
292	Hoshiarpur	3	PUNJAB	75.911483	31.5143178	Small-leaf Milkpea	87	58
293	Jalandhar	3	PUNJAB	75.5761829	31.3260152	Hybrid Ladyslipper	88	26
294	Khanna	3	PUNJAB	76.2112286	30.697852	Metroxylon	78	13
295	Ludhiana	3	PUNJAB	75.8572758	30.900965	Inyo Frasera	90	40
296	Malerkotla	3	PUNJAB	75.8882508	30.5232076	San Francisco Woodland-star	65	37
297	Moga	3	PUNJAB	75.1717093	30.8164603	Harestail Grass	83	10
298	Muktsar	3	PUNJAB	74.511172	30.4766391	Fall Tansyaster	65	13
299	Pathankot	3	PUNJAB	75.6421121	32.2643375	Cyrtandra	83	32
300	Patiala	3	PUNJAB	76.3868797	30.3397809	Woolly Bluecurls	89	63
301	S.A.S. Nagar	3	PUNJAB	76.7567368	30.6496486	Santa Barbara Milkvetch	70	30
302	Ajmer	8	RAJASTHAN	74.6399163	26.4498954	Pygmy Alpinegold	67	31
303	Alwar	8	RAJASTHAN	76.6345735	27.5529907	Stebbins' Lewisia	77	46
304	Banswara	8	RAJASTHAN	74.4349761	23.5461394	Meadow Pennycress	68	15
305	Baran	8	RAJASTHAN	76.5131637	25.1011438	Weakstalk Bulrush	78	65
306	Beawar	8	RAJASTHAN	74.3190747	26.1007337	Nemesia	73	29
307	Bharatpur	8	RAJASTHAN	77.489515	27.216981	Green Cockscomb	77	54
308	Bhilwara	8	RAJASTHAN	74.586953	25.321377	Stenocybe Lichen	66	35
309	Bhiwadi	8	RAJASTHAN	76.8445999	28.2088218	Fadyen's Silktassel	76	41
310	Bikaner	8	RAJASTHAN	73.3119159	28.0229348	Sonoran Silverbush	69	36
311	Bundi	8	RAJASTHAN	75.6499025	25.4305144	Common Woolly Sunflower	76	21
312	Chittaurgarh	8	RAJASTHAN	74.6269216	24.8887435	California Pleuridium Moss	71	28
313	Churu	8	RAJASTHAN	74.9851678	28.3174965	Fiddleleaf Hawksbeard	66	25
314	Dhaulpur	8	RAJASTHAN	77.893391	26.7025181	Mahogany Milkweed	71	17
315	Ganganagar	8	RAJASTHAN	73.8771901	29.9038399	Desert Muhly	80	53
316	Gangapur City	8	RAJASTHAN	76.7278803	26.4846537	Goldenbanner	83	33
317	Hanumangarh	8	RAJASTHAN	74.3294199	29.5815012	Catechu Tree	85	43
318	Hindaun	8	RAJASTHAN	77.0330481	26.7454967	Mexican Brassbuttons	88	25
319	Jaipur	8	RAJASTHAN	75.7872709	26.9124336	Browneyes	66	51
320	Jhunjhunun	8	RAJASTHAN	75.3995089	28.1288747	White Pea	73	41
321	Jodhpur	8	RAJASTHAN	73.0243094	26.2389469	Pygmy Sagebrush	81	59
322	Kishangarh	8	RAJASTHAN	74.856397	26.5870344	Navelwort	89	61
323	Kota	8	RAJASTHAN	75.8647527	25.2138156	Moulins' Silverskin Lichen	71	18
324	Nagaur	8	RAJASTHAN	73.740924	27.1991222	Debeque Phacelia	73	35
325	Pali	8	RAJASTHAN	73.3234478	25.7710893	Northern Kittentails	69	35
326	Sawai Madhopur	8	RAJASTHAN	76.3521514	26.0377772	Buelliella Lichen	85	44
327	Sikar	8	RAJASTHAN	75.139911	27.6094	Pore Lichen	90	48
328	Sujangarh	8	RAJASTHAN	74.4642861	27.7044756	Mycomicrothelia Lichen	72	12
329	Tonk	8	RAJASTHAN	75.7894716	26.1620402	Densetuft Hairsedge	75	26
330	Udaipur	8	RAJASTHAN	73.712479	24.585445	Symphysia	74	24
331	Alandur	33	TAMIL NADU	80.2006371	12.9974873	Asian Taro	84	55
332	Ambattur	33	TAMIL NADU	80.1480551	13.1143167	Rock Melicgrass	87	32
333	Ambur	33	TAMIL NADU	78.7166084	12.7903613	Rainbow Manzanita	79	53
334	Avadi	33	TAMIL NADU	80.0969511	13.1067448	Petioled Fountaingrass	68	46
335	Chennai	33	TAMIL NADU	80.2707184	13.0826802	Suisun Marsh Aster	76	32
336	Coimbatore	33	TAMIL NADU	76.9558321	11.0168445	Myers' Pincushionplant	68	50
337	Cuddalore	33	TAMIL NADU	79.7680243	11.744699	Highlands Scrub St. Johnswort	83	63
338	Dindigul	33	TAMIL NADU	77.9802906	10.3673123	Blue Rattlesnake	67	48
339	Erode	33	TAMIL NADU	77.7171642	11.3410364	Rockmustard	66	40
340	Hosur	33	TAMIL NADU	77.8252923	12.7409127	Aboriginal Willowherb	77	51
341	Kancheepuram	33	TAMIL NADU	79.7036402	12.8341735	Nippon Bells	77	51
342	Karaikkudi	33	TAMIL NADU	78.7801544	10.0731315	Blodgett's Silverbush	71	54
343	Kumbakonam	33	TAMIL NADU	79.3881132	10.9616945	Thelopsis Lichen	76	42
344	Kurichi	33	TAMIL NADU	77.6966143	11.5707716	False Rosemary	89	34
345	Madavaram	33	TAMIL NADU	80.2309861	13.147819	Grassleaf Orchid	66	32
346	Madurai	33	TAMIL NADU	78.1197754	9.9252007	Early Wattle	85	34
347	Nagapattinam	33	TAMIL NADU	79.8423888	10.7656082	Ivory Coast Raphia Palm	77	42
348	Nagercoil	33	TAMIL NADU	77.4118996	8.1832857	Sunflower	73	58
349	Neyveli	33	TAMIL NADU	79.4760133	11.5432364	Sixweeks Grama	79	10
350	Pallavaram	33	TAMIL NADU	80.1526888	12.9673484	Kauai Nehe	90	17
351	Pudukkottai	33	TAMIL NADU	78.8208454	10.379663	Sickle Oligotrichum Moss	72	62
352	Rajapalayam	33	TAMIL NADU	77.5275463	9.4653377	Texan Candyleaf	85	28
353	Salem	33	TAMIL NADU	78.1460142	11.664325	Woodhouse's Bahia	80	60
354	Tambaram	33	TAMIL NADU	80.1274558	12.9229153	Rocky Mountain Maple	79	53
355	Thanjavur	33	TAMIL NADU	79.1378274	10.7869994	Oregon White Oak	69	14
356	Thoothukkudi	33	TAMIL NADU	78.1348361	8.7641661	Shield Lichen	74	32
357	Tiruchirappalli	33	TAMIL NADU	78.7046725	10.7904833	Illinois Pondweed	85	10
358	Tirunelveli	33	TAMIL NADU	77.7566523	8.7139126	Pussytoes Eggyolk Lichen	88	12
359	Tiruppur	33	TAMIL NADU	77.3410656	11.1085242	Little Woodfern	79	33
360	Tiruvannamalai	33	TAMIL NADU	79.0746957	12.2252841	Cusickiella	77	27
361	Tiruvottiyur	33	TAMIL NADU	80.3045793	13.1691914	Aster	65	58
362	Vellore	33	TAMIL NADU	79.1324986	12.9165167	Slender Orcutt Grass	66	38
363	Agartala	16	TRIPURA	91.2867777	23.831457	Collegeflower	69	24
364	Agra	9	UTTAR PRADESH	78.0080745	27.1766701	Longleaf Phlox	79	63
365	Akbarpur	9	UTTAR PRADESH	82.5537514	26.4407468	Ilang-ilang	67	27
366	Aligarh	9	UTTAR PRADESH	78.0880129	27.8973944	St. Francis Cabbage	86	59
367	Allahabad	9	UTTAR PRADESH	81.846311	25.4358011	Bur Chervil	90	38
368	Amroha	9	UTTAR PRADESH	78.4673426	28.9043537	Retama	80	30
369	Azamgarh	9	UTTAR PRADESH	83.1859458	26.0737044	Rhodesian Copalwood	70	44
370	Bahraich	9	UTTAR PRADESH	81.4278984	27.7525271	King Bladderpod	77	21
371	Ballia	9	UTTAR PRADESH	84.1487319	25.7584381	Dust Lichen	78	37
372	Banda	9	UTTAR PRADESH	80.3380213	25.4796224	Sendtner's Molendoa Moss	80	42
373	Baraut	9	UTTAR PRADESH	77.2606149	29.0998902	Virgin Thistle	66	63
374	Bareilly	9	UTTAR PRADESH	79.4304381	28.3670355	Moundlily Yucca	66	35
375	Basti	9	UTTAR PRADESH	82.7633133	26.8176796	Cheesytoes	84	43
376	Budaun	9	UTTAR PRADESH	79.1205419	28.0337088	Puerto Rico Croton	66	51
377	Bulandshahr	9	UTTAR PRADESH	77.8498292	28.406963	Creeping River Grass	79	17
378	Chandausi	9	UTTAR PRADESH	78.7796105	28.4480507	Rim Lichen	78	26
379	Deoria	9	UTTAR PRADESH	83.804868	26.4270039	Desert Springparsley	70	51
380	Etah	9	UTTAR PRADESH	78.662567	27.5587505	Earleaf Greenbrier	67	42
381	Etawah	9	UTTAR PRADESH	79.1096901	26.8458148	Psorinia	77	37
382	Faizabad	9	UTTAR PRADESH	82.1441643	26.7732476	Stegonia Moss	84	38
383	Farrukhabad-cum-Fatehgarh	9	UTTAR PRADESH	79.5940544	27.3826126	Bicknell's Milkvetch	81	43
384	Fatehpur	9	UTTAR PRADESH	80.8986502	25.8499808	Superficial Map Lichen	86	49
385	Firozabad	9	UTTAR PRADESH	78.3957574	27.1591006	Rose's Orange Lichen	90	57
386	Ghazipur	9	UTTAR PRADESH	83.5770202	25.5840419	Oatgrass	86	17
387	Gonda	9	UTTAR PRADESH	81.9618968	27.1339913	Yukon Bellflower	82	36
388	Gorakhpur	9	UTTAR PRADESH	83.3731675	26.7605545	Molokai Phyllostegia	67	43
389	Greater Noida	9	UTTAR PRADESH	77.5039904	28.4743879	Lesser Saltmarsh Sedge	77	33
390	Hapur	9	UTTAR PRADESH	77.7758825	28.7305798	Coneflower	67	42
391	Hardoi	9	UTTAR PRADESH	80.1875065	27.2978965	Lokao	65	25
392	Hathras	9	UTTAR PRADESH	78.0537813	27.6056212	Mosquito Bills	74	24
393	Jaunpur	9	UTTAR PRADESH	82.6987002	25.7490034	Strict Blue-eyed Grass	75	64
394	Jhansi	9	UTTAR PRADESH	78.5684594	25.4484257	Woollyheads	82	31
395	Kanpur	9	UTTAR PRADESH	80.3318736	26.449923	Tidestrom's Lupine	86	46
396	Kanpur City	9	UTTAR PRADESH	80.3318736	26.449923	Groundcherry	77	46
397	Kasganj	9	UTTAR PRADESH	78.649785	27.8129344	Texas Crabgrass	75	22
398	Khora	9	UTTAR PRADESH	77.3999054	28.753915	Mountain-avens	65	41
399	Khurja	9	UTTAR PRADESH	77.8538797	28.2513538	Broadfruit Horned Beaksedge	69	35
400	Lakhimpur	9	UTTAR PRADESH	80.7824012	27.9490794	Raven Ridge False Goldenweed	69	61
401	Lalitpur	9	UTTAR PRADESH	78.4120206	24.6878597	Palolo Valley Rollandia	85	12
402	Loni	9	UTTAR PRADESH	77.3008506	28.7316438	Ogilvie Mountain Springbeauty	67	38
403	Lucknow	9	UTTAR PRADESH	80.946166	26.8466937	Tall Albizia	88	26
404	Mainpuri	9	UTTAR PRADESH	79.1096901	27.2177405	Balsamillo	77	37
405	Mathura	9	UTTAR PRADESH	77.673673	27.4924134	Map Lichen	79	54
406	Maunath Bhanjan	9	UTTAR PRADESH	83.5586445	25.9496379	Mountain Tansymustard	76	38
407	Meerut	9	UTTAR PRADESH	77.7064137	28.9844618	Variable Panicgrass	86	60
408	Mirzapur-cum-Vindhyachal	9	UTTAR PRADESH	82.5644344	25.1336987	Biatorella Lichen	66	21
409	Modinagar	9	UTTAR PRADESH	77.5779592	28.8316307	Bejuco	76	23
410	Moradabad	9	UTTAR PRADESH	78.7733286	28.8386481	Harlequinbush	70	43
411	Mughalsarai	9	UTTAR PRADESH	83.1198203	25.2814947	Graceful Maiden Fern	79	55
412	Muzaffarnagar	9	UTTAR PRADESH	77.7085091	29.4726817	Muir's Reedgrass	68	53
413	Noida	9	UTTAR PRADESH	77.3910265	28.5355161	Twogrooved Milkvetch	78	36
414	Orai	9	UTTAR PRADESH	79.4478858	26.00864	Common Evening Primrose	66	60
415	Pilibhit	9	UTTAR PRADESH	79.8128649	28.6207939	Woolly Princesplume	78	32
416	Rae Bareli	9	UTTAR PRADESH	81.2408689	26.2345298	Wildrye	88	46
417	Rampur	9	UTTAR PRADESH	82.5916032	25.4842209	Parry's Lousewort	67	36
418	Saharanpur	9	UTTAR PRADESH	77.5510172	29.967079	Loxospora Lichen	65	51
419	Sambhal	9	UTTAR PRADESH	78.5717631	28.5903614	Appalachian Sedge	88	10
420	Shahjahanpur	9	UTTAR PRADESH	79.8296743	27.8295801	Marsh Rosemary	73	38
421	Shamli	9	UTTAR PRADESH	77.3152116	29.4507575	Arctic Dactylina Lichen	85	34
422	Shikohabad	9	UTTAR PRADESH	78.5881674	27.1061756	Rosy Camphorweed	67	17
423	Sitapur	9	UTTAR PRADESH	80.8986502	27.5325072	California Bedstraw	82	56
424	Sultanpur	9	UTTAR PRADESH	82.0727061	26.2647757	Mago	87	33
425	Unnao	9	UTTAR PRADESH	80.4878195	26.5393449	Inconspicuous Pea	73	63
426	Varanasi	9	UTTAR PRADESH	82.9739144	25.3176452	Wreath Lichen	81	31
427	Dehradun	5	UTTARAKHAND	78.0321918	30.3164945	Manynerve Catchfly	86	32
428	Haldwani-cum-Kathgodam	5	UTTARAKHAND	79.5129767	29.2182644	Thickstem Wild Cabbage	85	21
429	Hardwar	5	UTTARAKHAND	78.1642478	29.9456906	Myrionora	69	12
430	Kashipur	5	UTTARAKHAND	78.9618845	29.2104232	Darkbrown Sedge	75	48
431	Roorkee	5	UTTARAKHAND	77.8880002	29.8542626	Lilac Snapdragon	87	41
432	Rudrapur	5	UTTARAKHAND	79.4141214	28.9875082	Wall Bedstraw	78	60
433	Asansol	19	WEST BENGAL	86.9523954	23.6739452	Beach Sandmat	68	49
434	Ashoknagar Kalyangarh	19	WEST BENGAL	88.6241351	22.84039	Stigmidium Lichen	66	52
435	Baharampur	19	WEST BENGAL	88.2679264	24.0988265	Bushweed	78	14
436	Baidyabati	19	WEST BENGAL	88.3190717	22.795783	Pinkscale Blazing Star	67	23
437	Bally	19	WEST BENGAL	88.3423199	22.6500518	Twinberry Honeysuckle	74	53
438	Bally City	19	WEST BENGAL	88.3423199	22.6500518	Kurogane Holly	74	65
439	Balurghat	19	WEST BENGAL	88.7830612	25.2372834	Goutystalk Nettlespurge	81	23
440	Bankura	19	WEST BENGAL	87.0786044	23.2324146	Branching Phacelia	83	57
441	Bansberia	19	WEST BENGAL	88.4070629	22.951904	Common Spring-gold	83	60
442	Baranagar	19	WEST BENGAL	88.3654386	22.6383016	Dubautia	85	61
443	Barasat	19	WEST BENGAL	88.480552	22.7228159	Milkbark	81	65
444	Barddhaman	19	WEST BENGAL	87.8614793	23.2324214	Livingvase	90	48
445	Barrackpur	19	WEST BENGAL	88.3883455	22.7674278	Daucosma	85	16
446	Basirhat	19	WEST BENGAL	88.8671766	22.6574017	James' Buckwheat	85	62
447	Bhadreswar	19	WEST BENGAL	88.3456516	22.8275529	Roccellina Lichen	75	39
448	Bhatpara	19	WEST BENGAL	88.406454	22.8562412	Cutleaf Anemone	76	53
449	Bidhan Nagar	19	WEST BENGAL	88.4170988	22.5867296	Swan's Sedge	89	22
450	Bongaon	19	WEST BENGAL	88.827703	23.0440381	Lunaria	88	21
451	Champdani	19	WEST BENGAL	88.3409338	22.8049456	Giant Filbert	69	34
452	Chandannagar	19	WEST BENGAL	88.36326	22.8647723	Thunberg's Gardenia	90	57
453	Dabgram	19	WEST BENGAL	88.4415998	26.6954603	Pinyon Gilia	88	27
454	Darjiling	19	WEST BENGAL	88.2626751	27.0360066	James' Galleta	69	64
455	Dum Dum	19	WEST BENGAL	88.431683	22.6470514	Jamaican Nettletree	76	15
456	Durgapur	19	WEST BENGAL	87.3119227	23.5204443	Hybrid Oak	90	13
457	English Bazar	19	WEST BENGAL	88.1410967	25.0108408	Trinity Penstemon	85	39
458	Habra	19	WEST BENGAL	88.6639591	22.8488542	Siskiyou Milkvetch	71	30
459	Haldia	19	WEST BENGAL	88.0698118	22.0666742	Cajanus	88	52
460	Halisahar	19	WEST BENGAL	88.4193259	22.9441261	Tortula Moss	65	17
461	Haora	19	WEST BENGAL	88.2636394	22.5957689	Neonotonia	70	20
462	Hugli-Chinsurah	19	WEST BENGAL	88.3919026	22.8858771	Spleenwort	65	62
463	Jalpaiguri	19	WEST BENGAL	88.7205256	26.5434772	Little Reddish Indian Paintbrush	90	19
464	Jamuria	19	WEST BENGAL	87.0774107	23.7060688	Suksdorf's Lupine	80	10
465	Kalyani	19	WEST BENGAL	88.4345078	22.9750855	Thelocarpon Lichen	87	40
466	Kamarhati	19	WEST BENGAL	88.3706491	22.6846668	Kalm's St. Johnswort	89	58
467	Kanchrapara	19	WEST BENGAL	88.4335019	22.944101	Kauai Schiedea	85	31
468	Kharagpur	19	WEST BENGAL	87.2319753	22.34601	Mojave Milkweed	76	41
469	Khardaha	19	WEST BENGAL	88.3753455	22.7002943	Parmotrema Lichen	80	47
470	Kolkata	19	WEST BENGAL	88.363895	22.572646	West Indian Vanilla	80	17
471	Krishnanagar	19	WEST BENGAL	88.5013962	23.4008744	Eureka Dunegrass	70	25
472	Kulti	19	WEST BENGAL	86.8370937	23.7370306	Eastwood's Podistera	65	39
473	Madhyamgram	19	WEST BENGAL	88.465448	22.6925015	Yucatan Sage	90	46
474	Maheshtala	19	WEST BENGAL	88.2509941	22.511976	Chrysophyllum	65	39
475	Medinipur	19	WEST BENGAL	87.3214908	22.4308892	Antilles Dwarf Polypody	70	58
476	Nabadwip	19	WEST BENGAL	88.3676393	23.4036446	Teddybear Cholla	76	22
477	Naihati	19	WEST BENGAL	88.4220324	22.8928724	Howell's Umbrellawort	87	30
478	North Barrackpur	19	WEST BENGAL	88.367179	22.7902358	Acacia	86	53
479	North Dum Dum	19	WEST BENGAL	88.4258483	22.6658076	Tufted Bulrush	75	51
480	Panihati	19	WEST BENGAL	88.3991789	22.6983108	Wright's Stonecrop	71	19
481	Puruliya	19	WEST BENGAL	86.365208	23.3320779	Sticky Centaury	78	12
482	Raiganj	19	WEST BENGAL	88.1255837	25.6185295	Oregon Checkerbloom	73	13
483	Rajarhat Gopalpur	19	WEST BENGAL	88.4540911	22.6321975	Coast Range False Bindweed	72	23
484	Rajpur Sonarpur	19	WEST BENGAL	88.3914731	22.4490894	Coastal Buckwheat	85	10
485	Raniganj	19	WEST BENGAL	87.0923906	23.6290575	Rattan's Cryptantha	74	55
486	Rishra	19	WEST BENGAL	88.3287896	22.7244023	Green Bulrush	74	13
487	Santipur	19	WEST BENGAL	88.4380966	23.2645399	Pale Madwort	83	16
488	Serampore	19	WEST BENGAL	88.3385053	22.748331	Amblyolepis	66	43
489	Siliguri	19	WEST BENGAL	88.3952861	26.7271012	Great Basin Tumblemustard	70	41
490	South Dum Dum	19	WEST BENGAL	88.3967536	22.6059435	Waxyleaf Meadow-rue	68	28
491	Titagarh	19	WEST BENGAL	88.3737064	22.7382665	Gentian Beardtongue	72	57
492	Uluberia	19	WEST BENGAL	88.1000377	22.4744363	Charleston Mountain Angelica	74	40
493	Uttarpara Kotrung	19	WEST BENGAL	88.3385053	22.6768451	Soft Bird's-beak	80	44
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.customer (customer_rating, nor, customerid, name, date_of_birth, street, state, pincode, locality, password, email, latitude, longitude) FROM stdin;
0	0	C101	customer1	1999-10-21	RNA Continental	Maharashtra	400071	Chembur	$2b$10$EKltN/Jk0tQ5oU0QV3Xyvu0kiA1fYgRRkEkoNZ9jrAKk1uAFpxs8.	c@gmail.com	19.0588813	72.9041631693269
\.


--
-- Data for Name: customer_phone_number; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.customer_phone_number (phone_number, customerid) FROM stdin;
\.


--
-- Data for Name: delivery_person; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.delivery_person (delivery_person_rating, nor, deliveryid, name, date_of_birth, street, state, pincode, locality, password, vehicleid, email, latitude, longitude) FROM stdin;
0	0	D102	d	1999-10-21	RNA Continental	Maharashtra	400071	Chembur	$2b$10$Uyw6HhtB7Z/b5ldqYGWQx.107o.IHMKeXUP.PAJlQ924o5U28EbZK	V101	d@gmail.com	19.0588813	72.9041631693269
\.


--
-- Data for Name: farmer; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.farmer (farmerid, name, date_of_birth, farmer_rating, nor, street, state, locality, pincode, password, email, latitude, longitude) FROM stdin;
F104	Farmer1	1999-10-21	0	0	s1	maharashtra	local1	400091	$2b$10$oecsVjsS.GIUd7nnz615c.DXSAx6ARXxXC6htSP.7EJdppYfgL20y	\N	\N	\N
F105	fadmin	2000-01-01	0	0	RNA Continental	Maharashtra	Chembur	400071	$2b$10$U9mgCRACG1xdy8fQPzmLrezxKyLVyJbvX2se3pLc8EF3hglROCddq	\N	\N	\N
F106	Sarang	1999-10-21	0	0	RNA Continental	Maharashtra	Chembur	400071	$2b$10$sDDTTCd6Ge78DRUR0dNdt.YQEp1w4ZPg1MVUX70dBfLBGhLHlfT/S	\N	\N	\N
F107	Test	2000-08-21	0	0	RNA Continental	Maharashtra	Chembur	400071	$2b$10$penR2jLukWGu7spI.E/5mul2U6jayCsMtbbML3hjBdBHN9zQlWOM.	test@gmail.com	19.0588813	72.9041631693269
F108	t	1999-10-21	0	0	RNA Continental	Maharashtra	Chembur	400071	$2b$10$0Ur8vkZK6EqCEJHCXwXz/uTNO1THbyk9bkQa7eHCIgJ6KXuDpVmMy	t@gmail.com	19.0588813	72.9041631693269
F110	a	1999-10-21	0	0	RNA Continental	Maharashtra	Chembur	400071	$2b$10$Aonf2Zyz3JR0zRBiMB3usONPQVQu6qjKGH7VSlISHEr37RYrOqWdO	a@gmail.com	19.0588813	72.9041631693269
F111	a	1999-10-21	0	0	RNA Continental	Maharashtra	Chembur	400071	$2b$10$deZnpHZ1dgcPjU4x/JiCo.jUhs1.6.T7ZO026LEeZ9tCjMsu41KBy	a1@gmail.com	19.0588813	72.9041631693269
F112	b	1999-10-21	0	0	RNA Continental	Maharashtra	Chembur	400071	$2b$10$diEndmg9PzyJCOroaMM0T.JlyJe9S.HvQgW.C70AQMhaAWZKOP0C2	b@gmail.com	19.0588813	72.9041631693269
\.


--
-- Data for Name: farmer_phone_number; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.farmer_phone_number (phone_number, farmerid) FROM stdin;
\.


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.feedback (friendliness, knowledge, type, efficiency, comment, quality, reviewee) FROM stdin;
\.


--
-- Data for Name: ordered; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.ordered (cropid, farmerid, orderid, amount) FROM stdin;
C105	F104	O113	100
C105	F104	O115	10
C106	F104	O117	5
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.orders (orderid, price, customerid, deliveryid, status) FROM stdin;
O101	58164	C101	D102	0
O113	5000	C101	D102	0
O115	500	C101	D102	0
O117	250	C101	D102	2
\.


--
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
\.


--
-- Data for Name: storage; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.storage (capacity, state, street, pincode, locality, latitude, longitude, farmerid) FROM stdin;
10	Maharashtra	RNA Continental	400071	Chembur	19.0588813	72.9041631693269	F104
\.


--
-- Data for Name: temporder; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.temporder (cropid, farmerid, customerid, amount) FROM stdin;
\.


--
-- Data for Name: vehicles; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

COPY public.vehicles (vehicleid, vehicleno, volume_capacity, licence_number, type) FROM stdin;
V101	1	10	MH011077	Tempo
\.


--
-- Name: crop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbadmin
--

SELECT pg_catalog.setval('public.crop_id_seq', 114, true);


--
-- Name: crops_gis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbadmin
--

SELECT pg_catalog.setval('public.crops_gis_id_seq', 493, true);


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbadmin
--

SELECT pg_catalog.setval('public.customer_id_seq', 105, true);


--
-- Name: delivery_person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbadmin
--

SELECT pg_catalog.setval('public.delivery_person_id_seq', 102, true);


--
-- Name: farmer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbadmin
--

SELECT pg_catalog.setval('public.farmer_id_seq', 112, true);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbadmin
--

SELECT pg_catalog.setval('public.order_id_seq', 117, true);


--
-- Name: vehicle_id; Type: SEQUENCE SET; Schema: public; Owner: dbadmin
--

SELECT pg_catalog.setval('public.vehicle_id', 101, true);


--
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (customerid);


--
-- Name: crop crop_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.crop
    ADD CONSTRAINT crop_pkey PRIMARY KEY (cropid, farmerid);


--
-- Name: crops_gis crops_gis_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.crops_gis
    ADD CONSTRAINT crops_gis_pkey PRIMARY KEY (id);


--
-- Name: customer customer_email_key; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_email_key UNIQUE (email);


--
-- Name: customer_phone_number customer_phone_number_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.customer_phone_number
    ADD CONSTRAINT customer_phone_number_pkey PRIMARY KEY (phone_number, customerid);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customerid);


--
-- Name: delivery_person delivery_person_email_key; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.delivery_person
    ADD CONSTRAINT delivery_person_email_key UNIQUE (email);


--
-- Name: delivery_person delivery_person_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.delivery_person
    ADD CONSTRAINT delivery_person_pkey PRIMARY KEY (deliveryid);


--
-- Name: farmer farmer_email_key; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.farmer
    ADD CONSTRAINT farmer_email_key UNIQUE (email);


--
-- Name: farmer_phone_number farmer_phone_number_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.farmer_phone_number
    ADD CONSTRAINT farmer_phone_number_pkey PRIMARY KEY (phone_number, farmerid);


--
-- Name: farmer farmer_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.farmer
    ADD CONSTRAINT farmer_pkey PRIMARY KEY (farmerid);


--
-- Name: ordered ordered_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.ordered
    ADD CONSTRAINT ordered_pkey PRIMARY KEY (cropid, orderid);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (orderid);


--
-- Name: storage storage_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_pkey PRIMARY KEY (farmerid);


--
-- Name: temporder temporder_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.temporder
    ADD CONSTRAINT temporder_pkey PRIMARY KEY (cropid, customerid);


--
-- Name: vehicles vehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (vehicleid);


--
-- Name: cart cart_customerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_customerid_fkey FOREIGN KEY (customerid) REFERENCES public.customer(customerid);


--
-- Name: crop crop_farmerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.crop
    ADD CONSTRAINT crop_farmerid_fkey FOREIGN KEY (farmerid) REFERENCES public.farmer(farmerid);


--
-- Name: customer_phone_number customer_phone_number_customerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.customer_phone_number
    ADD CONSTRAINT customer_phone_number_customerid_fkey FOREIGN KEY (customerid) REFERENCES public.customer(customerid);


--
-- Name: delivery_person delivery_person_vehicleid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.delivery_person
    ADD CONSTRAINT delivery_person_vehicleid_fkey FOREIGN KEY (vehicleid) REFERENCES public.vehicles(vehicleid);


--
-- Name: farmer_phone_number farmer_phone_number_farmerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.farmer_phone_number
    ADD CONSTRAINT farmer_phone_number_farmerid_fkey FOREIGN KEY (farmerid) REFERENCES public.farmer(farmerid);


--
-- Name: ordered ordered_cropid_farmerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.ordered
    ADD CONSTRAINT ordered_cropid_farmerid_fkey FOREIGN KEY (cropid, farmerid) REFERENCES public.crop(cropid, farmerid);


--
-- Name: ordered ordered_orderid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.ordered
    ADD CONSTRAINT ordered_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.orders(orderid);


--
-- Name: orders orders_customerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customerid_fkey FOREIGN KEY (customerid) REFERENCES public.customer(customerid);


--
-- Name: orders orders_deliveryid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_deliveryid_fkey FOREIGN KEY (deliveryid) REFERENCES public.delivery_person(deliveryid);


--
-- Name: storage storage_farmerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_farmerid_fkey FOREIGN KEY (farmerid) REFERENCES public.farmer(farmerid);


--
-- Name: temporder temporder_cropid_farmerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.temporder
    ADD CONSTRAINT temporder_cropid_farmerid_fkey FOREIGN KEY (cropid, farmerid) REFERENCES public.crop(cropid, farmerid);


--
-- Name: temporder temporder_customerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY public.temporder
    ADD CONSTRAINT temporder_customerid_fkey FOREIGN KEY (customerid) REFERENCES public.cart(customerid);


--
-- PostgreSQL database dump complete
--

