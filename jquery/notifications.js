// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness Licensing, Guided Journey for Food Services and Start a Business e-Adviser will experience intermittent delays from 25 Oct 2021, 9am to 27 Oct 2021 6pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers, Guided Journeys and Business Grants will be unavailable on 7 November 2021 from 12am to 4pm due to scheduled maintenance. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> e-Advisers for Business Structure and Starting a Business will be unavailable due to scheduled maintenance on 8 Sep 2021 from 6pm to 8pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable during the upcoming scheduled maintenance from 29 October 2021 10pm to 30 October 2021 6am. <b>Guided Journey for Food Services will remain available.</b> We apologise for the inconvenience caused. You can check our <a href='https://licence1.business.gov.sg/feportal/web/frontier/maintenance' target='blank' rel='noopener'>schedule</a> for upcoming maintenance works."
  //"<b>[Attention: System Maintenance]</b> Application, amendment & renewing of Singapore Police Force (SPF) licences will be unavailable during the upcoming scheduled maintenance from 18 November 2021, 6.30pm to 7pm. <b>All other licences in Guided Journey for Food Services will remain available.</b> We apologise for the inconvenience caused."
  //"<b>[Announcement]</b> We have updated our Helpdesk contact information. Please go to our Contact Us page for the new contact details. Thank you.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers and Guided Journeys will be unavailable due to scheduled maintenance till 5 October 2021 12pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Information from ACRA and MyInfo for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on 12 Dec 2021 from 12am to 6am. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on 12 Dec 2021 from 12am to 7am. We apologise for the inconvenience caused."
  //"<b>[Announcement]</b> GoBusiness Helpdesk operating hours will be between 8:00AM and 1:00PM on 31 Dec 2021 (New Year's Eve). GoBusiness will be unavailable during the upcoming scheduled maintenance. We apologise for the inconvenience caused.<br>(1) From 31 Dec 2021, 10:00PM to 1 Jan 2022, 8:00AM.<br>(2) 2 Jan 2022, 12:00AM to 08:00AM."
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
