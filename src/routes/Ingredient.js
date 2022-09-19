import { useEffect, useState } from "react";
import styles from "../styles/ingredient.module.css";
const ENCODING_API_KEY = process.env.REACT_APP_API_KEY;

const Ingredient = () => {
  const [test, setTest] = useState(0);

  const onClickTest = () => {
    setTest((cur) => cur + 1);
  };

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
  const getXMLfromAPI = async () => {
    const url =
      "http://apis.data.go.kr/B552895/openapi/service/OrgPriceExaminService/getExaminPriceList?ServiceKey=";
    const reqURL = `${url}${ENCODING_API_KEY}&pageNo=1&numOfRows=50&examinDe=20220902&examinCd=6&prdlstCd=223`;
    const response = await fetch(reqURL);
    const xmlString = await response.text();
    let XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
    console.log(xmlToJson(XmlNode));
  };
  useEffect(() => {
    getXMLfromAPI();
  })

  return (
    <section className={styles.wrap}>
      <h1 onClick={onClickTest} className={styles.title}>
        {test}
      </h1>
    </section>
  );
};

export default Ingredient;