"use strict";

import tinycolor from "tinycolor2";

export function BWidget(options) {
  let _this = this;
  let cors = "https://beanstack-cors-anywhere.herokuapp.com/";
  let api =
    "https://beanstackedu.beanstack.com/api/v2/microsites_group_statistics/";
  let defaults = {
    groupId: 30,
    container: "#bs-widget",
    color: "#2323FA",
  };

  let heart =
    '<svg width="20" height="29" viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.10466 9.60099C-1.42936 13.4764 0.777223 19.0596 14.6388 28.4978C14.9823 28.7315 15.4783 28.6482 15.153 28.0563L15.0603 27.8838C14.1577 26.1622 13.1114 22.8931 15.6222 18.7861L15.8194 18.4598C19.007 13.1288 22.0554 5.13492 17.2642 1.50079C12.3347 -2.23819 6.60583 2.63878 6.46388 8.35695L6.3637 8.29836C5.80513 7.98761 3.03132 6.65437 1.10466 9.60099Z"/></svg>';

  let clock =
    '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.16667C5.3975 2.16667 1.66666 5.89751 1.66666 10.5C1.66666 15.1025 5.3975 18.8333 10 18.8333C14.6025 18.8333 18.3333 15.1025 18.3333 10.5C18.3333 5.89751 14.6025 2.16667 10 2.16667ZM12.155 13.8333L9.41083 11.0892C9.25416 10.9325 9.16666 10.7208 9.16666 10.5V6.33334C9.16666 5.87334 9.54 5.50001 10 5.50001C10.46 5.50001 10.8333 5.87334 10.8333 6.33334V10.155L13.3333 12.655C13.6583 12.98 13.6583 13.5083 13.3333 13.8333C13.0083 14.1583 12.48 14.1583 12.155 13.8333Z"/></svg>';

  let styles =
    "#bs-widget,.bs-widget-container{display:-webkit-box;display:-ms-flexbox;-webkit-box-orient:vertical;-webkit-box-direction:normal}#bs-widget,.bs-widget-container,.bs-widget-title-row{-webkit-box-direction:normal}#bs-widget{display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:24px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Arial,sans-serif;font-style:normal;--bs-color:red;--bs-light:red;--bs-dark:red}.bs-widget-container{-webkit-box-sizing:border-box;box-sizing:border-box;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:32px;gap:28px;position:relative;width:500px;background:#fff;border:2px solid #eaeaea;border-radius:16px}.bs-widget-title-row{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px}.bs-widget-title-row .bs-widget-title-container{display:-webkit-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.bs-widget-goal-row,.bs-widget-title-row .bs-widget-endson-container{display:-webkit-box;display:-ms-flexbox;-webkit-box-direction:normal}.bs-widget-title-row .bs-widget-endson-container .bs-widget-clock svg,.bs-widget-title-row .bs-widget-title-container .bs-widget-heart svg{fill:var(--bs-color)}.bs-widget-title-row .bs-widget-title-container .bs-widget-title{font-weight:700;font-size:20px;line-height:25px;color:var(--bs-color)}.bs-widget-title-row .bs-widget-endson-container{display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;gap:8px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.bs-widget-title-row .bs-widget-endson-container .bs-widget-endson{font-weight:700;font-size:15px;line-height:20px;text-align:right;color:#656565;position:relative;top:-1px}.bs-widget-goal-row{width:100%;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;gap:12px}.bs-widget-goal-row .bs-widget-goal-text{color:#656565}.bs-widget-goal-row .bs-widget-goal-text strong{font-weight:700;font-size:30px;line-height:34px;color:var(--bs-color)}.bs-widget-goal-row .bs-widget-goal-text span{font-weight:700;font-size:16px}@media screen and (max-width:350px){.bs-widget-title-row .bs-widget-title-container .bs-widget-heart svg{width:12px;height:22px}.bs-widget-title-row .bs-widget-title-container .bs-widget-title{font-size:18px;line-height:22px}.bs-widget-title-row .bs-widget-endson-container .bs-widget-clock{display:none}.bs-widget-title-row .bs-widget-endson-container .bs-widget-endson{font-size:14px;line-height:18px}.bs-widget-goal-row .bs-widget-goal-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2px}.bs-widget-goal-row .bs-widget-goal-text strong{font-size:24px;line-height:30px}.bs-widget-goal-row .bs-widget-goal-text span{font-size:15px;line-height:18px}}.bs-widget-goal-row .bs-widget-goal{margin-top:4px}.bs-widget-goal-row .bs-widget-goal .bs-widget-goal-bar{height:8px;width:100%;background:var(--bs-light);border-radius:8px;position:relative}.bs-widget-goal-row .bs-widget-goal .bs-widget-goal-progress{background:var(--bs-color);border-radius:8px;height:100%;}.bs-widget-goal-row .bs-widget-goal .bs-widget-goal-indicator{width:8px;height:8px;background:#fff;border:4px solid var(--bs-color);-webkit-box-shadow:0 0 0 4px #fff;box-shadow:0 0 0 4px #fff;border-radius:100%;position:absolute;margin-left:-4px;left:0px;top:0;margin-top:-4px}.bs-widget-last-updated-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;gap:8px}.bs-widget-last-updated-row .bs-widget-last-updated{font-weight:400;font-size:14px;line-height:18px;color:#707070}.bs-widget-last-updated-row a.bs-widget-visit{font-weight:400;font-size:14px;line-height:18px;text-align:center;-webkit-text-decoration-line:underline;text-decoration-line:underline;color:var(--bs-dark)}@media screen and (max-width:450px){.bs-widget-title-row{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.bs-widget-last-updated-row{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.bs-widget-last-updated-row .bs-widget-last-updated,.bs-widget-last-updated-row a.bs-widget-visit{font-size:13px;line-height:16px}}";

  options = { ...defaults, ...options };

  this.loadRequest = function () {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        _this.init(data.statistic);
      } else if (this.readyState === 4 && this.status != 200) {
        _this.error(this.status);
      }
    };

    req.open("GET", cors + api + options.groupId);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Accept", "application/json");
    req.send();
  };

  this.init = function (data) {
    let endDate = new Date(data.end_date).toLocaleDateString("en-us", {
      year: "numeric",
      day: "numeric",
      month: "short",
    });

    let updatedDate = new Date(data.updated_at).toLocaleDateString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    let goalBarPercentage =
      data.total / data.goal >= 1
        ? "100%"
        : Math.ceil((data.total / data.goal) * 10000).toString() + "%";

    const container = document.createElement("div");
    container.setAttribute("class", "bs-widget-container");
    container.style.setProperty(
      "--bs-color",
      tinycolor(options.color).toHexString()
    );
    container.style.setProperty(
      "--bs-dark",
      tinycolor(options.color).darken().toHexString()
    );
    container.style.setProperty(
      "--bs-light",
      tinycolor(options.color).lighten(30).toHexString()
    );

    const style = document.createElement("style");
    style.innerHTML = styles;
    container.appendChild(style);

    const titleRow = document.createElement("div");
    titleRow.setAttribute("class", "bs-widget-title-row");
    container.appendChild(titleRow);

    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("class", "bs-widget-title-container");
    titleRow.appendChild(titleContainer);

    const titleHeart = document.createElement("div");
    titleHeart.setAttribute("class", "bs-widget-heart");
    titleHeart.innerHTML = heart;
    titleContainer.appendChild(titleHeart);

    const titleText = document.createElement("div");
    titleText.setAttribute("class", "bs-widget-title");
    titleText.innerHTML = "Our Goal";
    titleContainer.appendChild(titleText);

    const endsContainer = document.createElement("div");
    endsContainer.setAttribute("class", "bs-widget-endson-container");
    titleRow.appendChild(endsContainer);

    const endsClock = document.createElement("div");
    endsClock.setAttribute("class", "bs-widget-clock");
    endsClock.innerHTML = clock;
    endsContainer.appendChild(endsClock);

    const endsText = document.createElement("div");
    endsText.setAttribute("class", "bs-widget-endson");
    endsText.innerHTML = "Ends on " + endDate;
    endsContainer.appendChild(endsText); // FORMAT DATE

    const goalRow = document.createElement("div");
    goalRow.setAttribute("class", "bs-widget-goal-row");
    container.appendChild(goalRow);

    const goalText = document.createElement("div");
    goalText.setAttribute("class", "bs-widget-goal-text");
    goalRow.appendChild(goalText);

    const goalStrong = document.createElement("strong");
    goalStrong.innerHTML = data.total.toLocaleString("en-US"); // FORMAT
    goalText.appendChild(goalStrong);

    const goalSpan = document.createElement("span");
    goalSpan.innerHTML = " / " + data.goal.toLocaleString("en-US"); // FORMAT
    goalText.appendChild(goalSpan);

    const goalContainer = document.createElement("div");
    goalContainer.setAttribute("class", "bs-widget-goal");
    goalRow.appendChild(goalContainer);

    const goalBar = document.createElement("div");
    goalBar.setAttribute("class", "bs-widget-goal-bar");
    goalContainer.appendChild(goalBar);

    const goalProgress = document.createElement("div");
    goalProgress.setAttribute("class", "bs-widget-goal-progress");
    goalProgress.style.width = goalBarPercentage;
    goalBar.appendChild(goalProgress);

    const goalIndicator = document.createElement("div");
    goalIndicator.setAttribute("class", "bs-widget-goal-indicator");
    goalIndicator.style.left = goalBarPercentage;
    goalBar.appendChild(goalIndicator);

    const lastUpdatedRow = document.createElement("div");
    lastUpdatedRow.setAttribute("class", "bs-widget-last-updated-row");
    container.appendChild(lastUpdatedRow);

    const lastUpdated = document.createElement("div");
    lastUpdated.setAttribute("class", "bs-widget-last-updated");
    lastUpdated.innerHTML = "Last updated on " + updatedDate;
    lastUpdatedRow.appendChild(lastUpdated);

    const visitLink = document.createElement("a");
    visitLink.setAttribute("class", "bs-widget-visit");
    visitLink.setAttribute("href", "https://beanstack.com/");
    visitLink.innerHTML = "Visit our Beanstack site";
    lastUpdatedRow.appendChild(visitLink);

    document.querySelector(options.container).appendChild(container);
  };

  this.error = function (error) {
    const container = document.createElement("div");
    container.setAttribute("class", "bs-widget-container");
    container.classList.add("error");
    container.innerHTML = error;
    container.style.setProperty(
      "--bs-color",
      tinycolor(options.color).toHexString()
    );
    container.style.setProperty(
      "--bs-dark",
      tinycolor(options.color).darken().toHexString()
    );
    container.style.setProperty(
      "--bs-light",
      tinycolor(options.color).lighten(30).toHexString()
    );

    const style = document.createElement("style");
    style.innerHTML = styles;
    container.appendChild(style);

    document.querySelector(options.container).appendChild(container);
  };

  this.loadRequest();
}
