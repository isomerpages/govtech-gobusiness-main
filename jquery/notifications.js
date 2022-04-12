// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness Licensing, Guided Journey for Food Services and Start a Business e-Adviser will experience intermittent delays from 25 Oct 2021, 9am to 27 Oct 2021 6pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers, Guided Journeys and Business Grants will be unavailable on 7 November 2021 from 12am to 4pm due to scheduled maintenance. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> e-Advisers for Business Structure and Starting a Business will be unavailable due to scheduled maintenance on 8 Sep 2021 from 6pm to 8pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable during the upcoming scheduled maintenance from 1 Apr 2022 10pm to 2 Apr 2022 6am. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Application, amendment & renewing of Singapore Police Force (SPF) licences will be unavailable during the upcoming scheduled maintenance on 29 Mar 2022 from 6.30pm to 7pm. <b>All other licences in Guided Journey for Food Services will remain available.</b> We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Business Grant Portal will be undergoing scheduled maintenance on 8 April 2022 from 6:00 PM to 9:00 PM. We apologise for any inconvenience.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable on the dates below due to scheduled maintenance. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.<br>(1) From 8 Apr 2022 10pm to 9 Apr 2022 6am<br>(2) From 9 Apr 2022 10pm to 10 Apr 2022 10am",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers and Guided Journeys will be unavailable due to scheduled maintenance till 5 October 2021 12pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Information from ACRA and MyInfo for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on 12 Dec 2021 from 12am to 6am. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on 3 Apr 2022 from 12am to 5am. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> Name reservation application and business registration for Sole Proprietorship/Partnership will be unavailable due to scheduled maintenance on 12 Apr 2022 from 12am to 6am. We apologise for the inconvenience caused."
];

// Do not edit the following code

const custom_notificationContainer = `<div class="notifications-container"></div>`;
$(document).ready(function () {
  $("html.has-navbar-fixed-top-widescreen").attr(
    "style",
    "padding-top: 0 !important"
  );
  $(".masthead-container").attr("style", "position: relative");
  $(".bp-container>div").attr("style", "margin-top: 0; margin-bottom: 0");
  $(".bp-container>div>div").attr("style", "padding: 0");
  $(".masthead-container").prepend(custom_notificationContainer);

  custom_notifications.forEach(m => {
    let notification = `<div class="notification-container">
          <h6 class="x">${m}</h6>
          <div class="control notif" style="background-color: #037e8a;">
            <a id="cancel-notification" class="button has-text-white" href="#">
              <span class="delete sgds-icon sgds-icon-cross is-size-4"></span>
            </a>
          </div>
        </div>`;
    $(".notifications-container").append(notification);
  });
  $(window).scrollTop();
  $(".control.notif").each(function () {
    $(this).click(function () {
      $(this).parent().remove();
    });
  });
  $(".x>a").attr("target", "_blank");
});
