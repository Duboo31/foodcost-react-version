import { useEffect, useState } from "react";
import styles from "../styles/ingredient.module.css";
const ENCODING_API_KEY = process.env.REACT_APP_API_KEY;

const Ingredient = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // xml을 json으로 변환해주는 xmlToJson함수
  function xmlToJson(xml) {
    var obj = {};

    if (xml.nodeType === "1") {
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === "3") {
      obj = xml.nodeValue;
    }
    var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
      return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
        return text + node.nodeValue;
      }, "");
    } else if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }

  // api 호출
  useEffect(() => {
    const getXMLfromAPI = async () => {
      const url =
        "http://apis.data.go.kr/B552895/openapi/service/OrgPriceExaminService/getExaminPriceList?ServiceKey=";
      const reqURL = `${url}${ENCODING_API_KEY}&pageNo=1&numOfRows=10&examinDe=20150502&examinCd=6&prdlstCd=223`;
      const response = await fetch(reqURL);
      const xmlString = await response.text();
      let XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
      console.log(xmlToJson(XmlNode).response.body.items.item);
      setLoading(false);
      setData(xmlToJson(XmlNode).response.body.items.item);
    };
    getXMLfromAPI();
  }, []);

  return (
    <section className={styles.wrap}>
      <h1 className={styles.title}>재료추가하기</h1>
      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <ul>
            <li>
              {data.map((g, idx) => (
                <div key={idx}>{g.areaNm}</div>
              ))}
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Ingredient;
