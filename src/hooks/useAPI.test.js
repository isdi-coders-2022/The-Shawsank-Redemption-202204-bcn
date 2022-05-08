import { renderHook, waitFor } from "@testing-library/react";
import CountriesProvider from "../store/contexts/CountriesProvider";
import useAPI from "./useAPI";

describe("Given the custom Hook useAPI", () => {
  describe("When loadCountries function it's invoqued", () => {
    test("Then it should return an array of two countries", async () => {
      const expectedCountries = [
        {
          name: {
            common: "Antarctica",
            official: "Antarctica",
          },
          tld: [".aq"],
          cca2: "AQ",
          ccn3: "010",
          cca3: "ATA",
          independent: false,
          status: "officially-assigned",
          unMember: false,
          idd: {},
          altSpellings: ["AQ"],
          region: "Antarctic",
          translations: {
            ara: {
              official: "أنتارتيكا",
              common: "أنتارتيكا",
            },
            ces: {
              official: "Antarktida",
              common: "Antarktida",
            },
            cym: {
              official: "Yr Antarctig",
              common: "Yr Antarctig",
            },
            deu: {
              official: "Antarktika",
              common: "Antarktis",
            },
            est: {
              official: "Antarktika",
              common: "Antarktika",
            },
            fin: {
              official: "Etelämanner",
              common: "Etelämanner",
            },
            fra: {
              official: "Antarctique",
              common: "Antarctique",
            },
            hrv: {
              official: "Antarktika",
              common: "Antarktika",
            },
            hun: {
              official: "Antarktisz",
              common: "Antarktisz",
            },
            ita: {
              official: "Antartide",
              common: "Antartide",
            },
            jpn: {
              official: "南極大陸",
              common: "南極",
            },
            kor: {
              official: "남극",
              common: "남극",
            },
            nld: {
              official: "Antarctica",
              common: "Antarctica",
            },
            per: {
              official: "جنوبگان",
              common: "جنوبگان",
            },
            pol: {
              official: "Antarktyka",
              common: "Antarktyka",
            },
            por: {
              official: "Antártica",
              common: "Antártida",
            },
            rus: {
              official: "Антарктида",
              common: "Антарктида",
            },
            slk: {
              official: "Antarktída",
              common: "Antarktída",
            },
            spa: {
              official: "Antártida",
              common: "Antártida",
            },
            swe: {
              official: "Antarktis",
              common: "Antarktis",
            },
            urd: {
              official: "انٹارکٹکا",
              common: "انٹارکٹکا",
            },
            zho: {
              official: "南极洲",
              common: "南极洲",
            },
          },
          latlng: [-90, 0],
          landlocked: false,
          area: 14000000,
          demonyms: {
            eng: {
              f: "Antarctican",
              m: "Antarctican",
            },
            fra: {
              f: "Antarcticaine",
              m: "Antarcticain",
            },
          },
          flag: "🇦🇶",
          maps: {
            googleMaps: "https://goo.gl/maps/kyBuJriu4itiXank7",
            openStreetMaps: "https://www.openstreetmap.org/node/36966060",
          },
          population: 1000,
          car: {
            signs: [""],
            side: "right",
          },
          timezones: [
            "UTC-03:00",
            "UTC+03:00",
            "UTC+05:00",
            "UTC+06:00",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+10:00",
            "UTC+12:00",
          ],
          continents: ["Antarctica"],
          flags: {
            png: "https://flagcdn.com/w320/aq.png",
            svg: "https://flagcdn.com/aq.svg",
          },
          coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/aq.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/aq.svg",
          },
          startOfWeek: "monday",
          capitalInfo: {},
          id: 2,
        },
        {
          name: {
            common: "Bahrain",
            official: "Kingdom of Bahrain",
            nativeName: {
              ara: {
                official: "مملكة البحرين",
                common: "‏البحرين",
              },
            },
          },
          tld: [".bh"],
          cca2: "BH",
          ccn3: "048",
          cca3: "BHR",
          cioc: "BRN",
          independent: true,
          status: "officially-assigned",
          unMember: true,
          currencies: {
            BHD: {
              name: "Bahraini dinar",
              symbol: ".د.ب",
            },
          },
          idd: {
            root: "+9",
            suffixes: ["73"],
          },
          capital: ["Manama"],
          altSpellings: ["BH", "Kingdom of Bahrain", "Mamlakat al-Baḥrayn"],
          region: "Asia",
          subregion: "Western Asia",
          languages: {
            ara: "Arabic",
          },
          translations: {
            ara: {
              official: "مملكة البحرين",
              common: "‏البحرين",
            },
            ces: {
              official: "Království Bahrajn",
              common: "Bahrajn",
            },
            cym: {
              official: "Teyrnas Bahrein",
              common: "Bahrain",
            },
            deu: {
              official: "Königreich Bahrain",
              common: "Bahrain",
            },
            est: {
              official: "Bahreini Kuningriik",
              common: "Bahrein",
            },
            fin: {
              official: "Bahrainin kuningaskunta",
              common: "Bahrain",
            },
            fra: {
              official: "Royaume de Bahreïn",
              common: "Bahreïn",
            },
            hrv: {
              official: "Kraljevina Bahrein",
              common: "Bahrein",
            },
            hun: {
              official: "Bahreini Királyság",
              common: "Bahrein",
            },
            ita: {
              official: "Regno del Bahrain",
              common: "Bahrein",
            },
            jpn: {
              official: "バーレーン王国",
              common: "バーレーン",
            },
            kor: {
              official: "바레인 왕국",
              common: "바레인",
            },
            nld: {
              official: "Koninkrijk Bahrein",
              common: "Bahrein",
            },
            per: {
              official: "پادشاهی بحرین",
              common: "بحرین",
            },
            pol: {
              official: "Królestwo Bahrajnu",
              common: "Bahrajn",
            },
            por: {
              official: "Reino do Bahrein",
              common: "Bahrein",
            },
            rus: {
              official: "Королевство Бахрейн",
              common: "Бахрейн",
            },
            slk: {
              official: "Bahrajnské kráľovstvo",
              common: "Bahrajn",
            },
            spa: {
              official: "Reino de Bahrein",
              common: "Bahrein",
            },
            swe: {
              official: "Konungariket Bahrain",
              common: "Bahrain",
            },
            urd: {
              official: "مملکتِ بحرین",
              common: "بحرین",
            },
            zho: {
              official: "巴林王国",
              common: "巴林",
            },
          },
          latlng: [26, 50.55],
          landlocked: false,
          area: 765,
          demonyms: {
            eng: {
              f: "Bahraini",
              m: "Bahraini",
            },
            fra: {
              f: "Bahreïnienne",
              m: "Bahreïnien",
            },
          },
          flag: "🇧🇭",
          maps: {
            googleMaps: "https://goo.gl/maps/5Zue99Zc6vFBHxzJ7",
            openStreetMaps: "https://www.openstreetmap.org/relation/378734",
          },
          population: 1701583,
          fifa: "BHR",
          car: {
            signs: ["BRN"],
            side: "right",
          },
          timezones: ["UTC+03:00"],
          continents: ["Asia"],
          flags: {
            png: "https://flagcdn.com/w320/bh.png",
            svg: "https://flagcdn.com/bh.svg",
          },
          coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/bh.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/bh.svg",
          },
          startOfWeek: "monday",
          capitalInfo: {
            latlng: [26.23, 50.57],
          },
          postalCode: {
            format: "####|###",
            regex: "^(\\d{3}\\d?)$",
          },
          id: 3,
        },
      ];

      const wrapper = ({ children }) => (
        <CountriesProvider>{children}</CountriesProvider>
      );

      const { result } = renderHook(() => useAPI(), { wrapper });
      const countries = await waitFor(() => result.current.loadCountries());
      expect(countries).toEqual(expectedCountries);
    });
  });

  describe("When deleteCountry function it's invoqued", () => {
    test("Then it should return an array of one country", async () => {
      const wrapper = ({ children }) => (
        <CountriesProvider>{children}</CountriesProvider>
      );

      const { result } = renderHook(() => useAPI(), { wrapper });
      const countries = await waitFor(() => result.current.deleteCountry(1));

      expect(countries).not.toBeNull();
    });
  });
});
