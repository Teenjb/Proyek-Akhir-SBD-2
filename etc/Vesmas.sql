--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6
-- Dumped by pg_dump version 14.2

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
-- Name: jenis; Type: TYPE; Schema: public; Owner: proyeksbd
--

CREATE TYPE public.jenis AS ENUM (
    'Mobil',
    'Motor'
);


ALTER TYPE public.jenis OWNER TO proyeksbd;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: service_record; Type: TABLE; Schema: public; Owner: proyeksbd
--

CREATE TABLE public.service_record (
    id integer NOT NULL,
    vin bigint NOT NULL,
    service_date date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.service_record OWNER TO proyeksbd;

--
-- Name: service_record_id_seq; Type: SEQUENCE; Schema: public; Owner: proyeksbd
--

CREATE SEQUENCE public.service_record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.service_record_id_seq OWNER TO proyeksbd;

--
-- Name: service_record_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: proyeksbd
--

ALTER SEQUENCE public.service_record_id_seq OWNED BY public.service_record.id;


--
-- Name: sparePart_serviceRecord; Type: TABLE; Schema: public; Owner: proyeksbd
--

CREATE TABLE public."sparePart_serviceRecord" (
    id_sparepart integer NOT NULL,
    id_servicerecord integer NOT NULL
);


ALTER TABLE public."sparePart_serviceRecord" OWNER TO proyeksbd;

--
-- Name: spare_part; Type: TABLE; Schema: public; Owner: proyeksbd
--

CREATE TABLE public.spare_part (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    price bigint NOT NULL
);


ALTER TABLE public.spare_part OWNER TO proyeksbd;

--
-- Name: spare_part_id_seq; Type: SEQUENCE; Schema: public; Owner: proyeksbd
--

CREATE SEQUENCE public.spare_part_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spare_part_id_seq OWNER TO proyeksbd;

--
-- Name: spare_part_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: proyeksbd
--

ALTER SEQUENCE public.spare_part_id_seq OWNED BY public.spare_part.id;


--
-- Name: user_account; Type: TABLE; Schema: public; Owner: proyeksbd
--

CREATE TABLE public.user_account (
    username character varying(30) NOT NULL,
    password character varying(100) NOT NULL,
    admin boolean NOT NULL
);


ALTER TABLE public.user_account OWNER TO proyeksbd;

--
-- Name: user_vin; Type: TABLE; Schema: public; Owner: proyeksbd
--

CREATE TABLE public.user_vin (
    vin bigint NOT NULL,
    username character varying(30) NOT NULL
);


ALTER TABLE public.user_vin OWNER TO proyeksbd;

--
-- Name: vehicle; Type: TABLE; Schema: public; Owner: proyeksbd
--

CREATE TABLE public.vehicle (
    vin bigint NOT NULL,
    brand character varying(30) NOT NULL,
    name character varying(30) NOT NULL,
    type public.jenis NOT NULL
);


ALTER TABLE public.vehicle OWNER TO proyeksbd;

--
-- Name: service_record id; Type: DEFAULT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.service_record ALTER COLUMN id SET DEFAULT nextval('public.service_record_id_seq'::regclass);


--
-- Name: spare_part id; Type: DEFAULT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.spare_part ALTER COLUMN id SET DEFAULT nextval('public.spare_part_id_seq'::regclass);


--
-- Data for Name: service_record; Type: TABLE DATA; Schema: public; Owner: proyeksbd
--

COPY public.service_record (id, vin, service_date) FROM stdin;
3	123456789	2022-05-22
4	987654321	2022-05-10
6	123456789	2022-05-10
7	9812345645	2022-05-25
9	456789132	2022-05-27
10	456789132	2022-05-27
12	31122001	2022-05-27
13	31122001	2022-05-27
14	31122001	2022-05-27
15	31122001	2022-05-27
16	31122001	2022-05-27
17	31122001	2022-05-27
18	31122001	2022-05-27
19	31122001	2022-05-27
20	31122001	2022-05-27
21	31122001	2022-05-27
22	31122001	2022-05-27
23	31122001	2022-05-27
24	31122001	2022-05-27
25	31122001	2022-05-27
26	31122001	2022-05-27
27	31122001	2022-05-27
28	31122001	2022-05-27
29	31122001	2022-05-27
30	31122001	2022-05-27
31	31122001	2022-05-27
32	31122001	2022-05-27
33	31122001	2022-05-27
34	31122001	2022-05-27
35	31122001	2022-05-27
36	31122001	2022-05-27
37	31122001	2022-05-27
38	31122001	2022-05-27
39	31122001	2022-05-27
40	31122001	2022-05-27
41	31122001	2022-05-27
42	31122001	2022-05-27
43	31122001	2022-05-27
44	31122001	2022-05-27
45	9812345645	2022-05-27
46	9812345645	2022-05-27
47	31122001	2022-05-27
48	31122001	2022-05-27
49	121212343456	2022-05-27
50	6666	2022-05-28
51	111222333444555	2022-05-28
52	111222333444555	2022-05-28
53	111222333444555	2022-05-28
54	111222333444555	2022-05-28
55	111222333444555	2022-05-28
56	1	2022-05-28
57	31122001	2022-05-28
58	2222	2022-05-28
59	121212343456	2022-05-28
\.


--
-- Data for Name: sparePart_serviceRecord; Type: TABLE DATA; Schema: public; Owner: proyeksbd
--

COPY public."sparePart_serviceRecord" (id_sparepart, id_servicerecord) FROM stdin;
2	4
4	4
13	6
9	3
2	3
4	27
8	27
14	33
4	33
14	35
4	35
4	43
8	43
9	43
4	44
9	44
8	44
4	45
14	45
8	45
9	45
13	45
2	45
4	46
14	46
13	46
2	46
8	46
9	46
9	47
14	47
2	47
9	48
8	49
2	49
9	49
17	49
4	49
14	49
9	50
13	50
8	50
17	50
9	50
4	51
9	51
14	51
9	52
14	52
9	52
2	53
13	53
9	53
14	54
9	54
2	54
14	55
13	55
8	55
9	56
2	56
14	56
9	57
2	57
4	57
14	57
14	58
4	58
2	58
17	58
14	59
13	59
2	59
\.


--
-- Data for Name: spare_part; Type: TABLE DATA; Schema: public; Owner: proyeksbd
--

COPY public.spare_part (id, name, price) FROM stdin;
9	Kampas Kopling	60000
13	kunci motor	15000
14	Rumah	60000
2	Oli Tengah	20000
17	Kemas	10000000
8	Lampu Belakang	50
4	kampas rem belakang	40000
\.


--
-- Data for Name: user_account; Type: TABLE DATA; Schema: public; Owner: proyeksbd
--

COPY public.user_account (username, password, admin) FROM stdin;
Valen	$2b$10$zsFx0EywBhcvtjv6XQZ/N.eNM3SsxM15NOjc2xomafP2gjyYAvFDq	t
Adiva	$2b$10$GiG9Dj/A6unLeBx4GVM9YO610fY0HK6E3YgNnPBgD/8jEF7mXriNu	t
Ghulam	$2b$10$a6i/8gpU1MtFuHiAZ11Imef2gVI.Uy7fE16U6LnidxMQifzAEEsqO	t
fateen	$2b$10$kBJBmOadAWeVblkawsw3JeoQAPocHTXxqPWa2SHiZMrVbjubE5YqS	f
kemas	$2b$10$iIXYIQPmamVSraGljdxYdOzonwY26g2qFkcZL3LXYluyl6RgBBiRi	f
natthan	$2b$10$lZIsBUigPSREe0x7fejKsuGGn8Z7nQRY4lAL2k7GnOx.QNnfkOGWO	f
embun	$2b$10$E9V4B.pnXiPWb5pc7pd6jO8t9G6XYKF70FgP2Po346jqICsVU3sG6	f
anjani	$2b$10$bnWq8rZloilYFC2a.ep4J..ZVgqe2lyYYjGQywZ4TP3N5JBv9.yFW	f
Viony	$2b$10$j9pGORDmdnwoTOwCsTU12.ypENuZ1zsez1bia90ZFY7iHYnOe9aJW	t
Daffa	$2b$10$Q0HaDkzRP4eTo37L/TIjv.rnfR7LF3PP2bf5MT.9DWfIHM2/Eh5we	f
nada	$2b$10$5L5z0KWHc8go1p9n55OAQe4rmCODyRBZaggD90knluVLTTZKWMLby	f
fiqa	$2b$10$eQj9gRsK1Vb4AfUr9mvKmONBlDCsKErWJv7Htb/C2ZvTgU2T79Y7m	f
khanca	$2b$10$pPGAtthGRGQ3HvYkIdr0FuvdIqtaNrmYl8EhWot7jlDz3IpjN0.u6	f
aidan	$2b$10$xwJ8I3.9PZN/ykDR0N0oBuqsPlHyey3ceOND5L8EnlOwRUcCBJg8O	f
andi	$2b$10$ofAshKrlVUFbkNPbX1Ckp.3HUo33JU3LpIbIxvyz9i4y2QAeZhXzW	f
tsabit	$2b$10$2PkKHAW0KQdIehfYTphPC.sPlt29ij42YfG5dv0QkK2SbczMEECH6	f
andin	$2b$10$OZVlq8KmD/wxWsFTvXSJP.VuBqhNBvPr5uhaSi0/dlQSqPEOmBIxe	f
fadel	$2b$10$49nOKwJy5LU6bB52Gb7ziOm/LkzIz6r0e555RdLMXhkfcYdEHw6AW	f
syifa	$2b$10$vSmipQolSB8T5Qb1flM4KeicAkpdmKEQhBCdPz.sfj1ViJpwYhfXu	f
tes	$2b$10$SCGJyNbepZuOdy2TTZZ9Pu7MUG4qrQJStb77GeMJMK4AXglqJ69eq	f
Sarah	$2a$10$j3kG6jYbeIl0g07Cok9s.uzkjKNLGky2ydaBCk5pRKEJjLqbetkvq	t
\.


--
-- Data for Name: user_vin; Type: TABLE DATA; Schema: public; Owner: proyeksbd
--

COPY public.user_vin (vin, username) FROM stdin;
123456789	Valen
987654321	Ghulam
135680781	Adiva
456789132	Ghulam
121212343456	Ghulam
9898121234	Ghulam
6745893434	Ghulam
9812345645	Ghulam
987654321	nada
9812345645	nada
121212343456	nada
9812345645	fateen
121212343456	fateen
123456789	fateen
456789132	fateen
123456789	Ghulam
123456789	andin
123456789	fadel
123456789	syifa
31122001	fateen
31122001	Ghulam
111222333444555	Ghulam
6666	nada
111222333444555	Ghulam
111222333444555	nada
6666	nada
2222	nada
\.


--
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: proyeksbd
--

COPY public.vehicle (vin, brand, name, type) FROM stdin;
123456789	Yamaha	Mio Z	Motor
987654321	Honda	Civic	Mobil
135680781	Yamaha	Nmax	Motor
456789132	Yamaha	Mio Z	Motor
121212343456	Mitsubishi	Outlander	Mobil
9898121234	Mitsubishi	Pajero	Mobil
6745893434	Kawasaki 	Ninja	Motor
9812345645	Vespa	Sprint	Motor
31122001	Yamaha	R15	Motor
11111111	Ninja	ZX1	Motor
123654	Toyota	Fortuner	Mobil
111222333444555	Honda	CRV	Mobil
999888	Toyota	Camry	Mobil
6666	Toyota	HRV	Mobil
1	Suzuki	Hayate	Motor
2222	Nissan	Livina	Mobil
\.


--
-- Name: service_record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: proyeksbd
--

SELECT pg_catalog.setval('public.service_record_id_seq', 59, true);


--
-- Name: spare_part_id_seq; Type: SEQUENCE SET; Schema: public; Owner: proyeksbd
--

SELECT pg_catalog.setval('public.spare_part_id_seq', 17, true);


--
-- Name: service_record service_record_pkey; Type: CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.service_record
    ADD CONSTRAINT service_record_pkey PRIMARY KEY (id);


--
-- Name: spare_part spare_part_pkey; Type: CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.spare_part
    ADD CONSTRAINT spare_part_pkey PRIMARY KEY (id);


--
-- Name: user_account user_account_pkey; Type: CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.user_account
    ADD CONSTRAINT user_account_pkey PRIMARY KEY (username);


--
-- Name: vehicle vehicle_pkey; Type: CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_pkey PRIMARY KEY (vin);


--
-- Name: sparePart_serviceRecord fk_servicerecord; Type: FK CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public."sparePart_serviceRecord"
    ADD CONSTRAINT fk_servicerecord FOREIGN KEY (id_servicerecord) REFERENCES public.service_record(id);


--
-- Name: sparePart_serviceRecord fk_sparepart; Type: FK CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public."sparePart_serviceRecord"
    ADD CONSTRAINT fk_sparepart FOREIGN KEY (id_sparepart) REFERENCES public.spare_part(id) ON DELETE CASCADE;


--
-- Name: user_vin fk_username; Type: FK CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.user_vin
    ADD CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES public.user_account(username);


--
-- Name: user_vin fk_vin; Type: FK CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.user_vin
    ADD CONSTRAINT fk_vin FOREIGN KEY (vin) REFERENCES public.vehicle(vin);


--
-- Name: service_record fk_vin; Type: FK CONSTRAINT; Schema: public; Owner: proyeksbd
--

ALTER TABLE ONLY public.service_record
    ADD CONSTRAINT fk_vin FOREIGN KEY (vin) REFERENCES public.vehicle(vin);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: azure_pg_admin
--

REVOKE ALL ON SCHEMA public FROM azuresu;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO azure_pg_admin;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: FUNCTION pg_replication_origin_advance(text, pg_lsn); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_advance(text, pg_lsn) TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_create(text); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_create(text) TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_drop(text); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_drop(text) TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_oid(text); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_oid(text) TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_progress(text, boolean); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_progress(text, boolean) TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_session_is_setup(); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_is_setup() TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_session_progress(boolean); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_progress(boolean) TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_session_reset(); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_reset() TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_session_setup(text); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_setup(text) TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_xact_reset(); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_reset() TO azure_pg_admin;


--
-- Name: FUNCTION pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone) TO azure_pg_admin;


--
-- Name: FUNCTION pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn) TO azure_pg_admin;


--
-- Name: FUNCTION pg_stat_reset(); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset() TO azure_pg_admin;


--
-- Name: FUNCTION pg_stat_reset_shared(text); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset_shared(text) TO azure_pg_admin;


--
-- Name: FUNCTION pg_stat_reset_single_function_counters(oid); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset_single_function_counters(oid) TO azure_pg_admin;


--
-- Name: FUNCTION pg_stat_reset_single_table_counters(oid); Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset_single_table_counters(oid) TO azure_pg_admin;


--
-- Name: COLUMN pg_config.name; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(name) ON TABLE pg_catalog.pg_config TO azure_pg_admin;


--
-- Name: COLUMN pg_config.setting; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(setting) ON TABLE pg_catalog.pg_config TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.line_number; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(line_number) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.type; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(type) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.database; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(database) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.user_name; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(user_name) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.address; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(address) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.netmask; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(netmask) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.auth_method; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(auth_method) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.options; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(options) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_hba_file_rules.error; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(error) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;


--
-- Name: COLUMN pg_replication_origin_status.local_id; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(local_id) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;


--
-- Name: COLUMN pg_replication_origin_status.external_id; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(external_id) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;


--
-- Name: COLUMN pg_replication_origin_status.remote_lsn; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(remote_lsn) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;


--
-- Name: COLUMN pg_replication_origin_status.local_lsn; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(local_lsn) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;


--
-- Name: COLUMN pg_shmem_allocations.name; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(name) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;


--
-- Name: COLUMN pg_shmem_allocations.off; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(off) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;


--
-- Name: COLUMN pg_shmem_allocations.size; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(size) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;


--
-- Name: COLUMN pg_shmem_allocations.allocated_size; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(allocated_size) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.starelid; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(starelid) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.staattnum; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(staattnum) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stainherit; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stainherit) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stanullfrac; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stanullfrac) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stawidth; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stawidth) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stadistinct; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stadistinct) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stakind1; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stakind1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stakind2; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stakind2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stakind3; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stakind3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stakind4; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stakind4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stakind5; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stakind5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.staop1; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(staop1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.staop2; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(staop2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.staop3; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(staop3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.staop4; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(staop4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.staop5; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(staop5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stacoll1; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stacoll1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stacoll2; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stacoll2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stacoll3; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stacoll3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stacoll4; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stacoll4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stacoll5; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stacoll5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stanumbers1; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stanumbers1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stanumbers2; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stanumbers2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stanumbers3; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stanumbers3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stanumbers4; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stanumbers4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stanumbers5; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stanumbers5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stavalues1; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stavalues1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stavalues2; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stavalues2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stavalues3; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stavalues3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stavalues4; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stavalues4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_statistic.stavalues5; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(stavalues5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.oid; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(oid) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subdbid; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subdbid) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subname; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subname) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subowner; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subowner) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subenabled; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subenabled) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subconninfo; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subconninfo) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subslotname; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subslotname) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subsynccommit; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subsynccommit) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- Name: COLUMN pg_subscription.subpublications; Type: ACL; Schema: pg_catalog; Owner: azuresu
--

GRANT SELECT(subpublications) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;


--
-- PostgreSQL database dump complete
--

