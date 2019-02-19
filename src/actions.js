import $ from "jquery"
import { en } from "./lang/en"
import { jp } from "./lang/jp"

$(document).ready(function() {
  function setLanguage(lang) {
    localStorage.setItem("language", lang)
  }

  function getLanguage() {
    const lang = localStorage.getItem("language")
    return lang === "en" ? en : jp
  }
  console.log([getLanguage()])
  $("#title").text(getLanguage()["date"])
  $(".menu__lang-left").click(function() {
    getLanguage()
    setLanguage("jp")
    location.reload()
  })
  $(".menu__lang-right").click(function() {
    getLanguage()
    setLanguage("en")
    location.reload()
  })
})
