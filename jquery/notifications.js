// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  //[**ADHOC**]
  //"Due to technical difficulties, you currently cannot request to amend, renew or cancel N2, IR1, IR2, IR3 and R1 licences. For urgent matters, please use <u><a href='https://www.nea.gov.sg/corporate-functions/feedback' target='_blank' rel='noopener'>NEA's feedback form</a></u> or myENV app. We are working to resolve this issue and apologise for the inconvenience caused.",

  //"<b>[Attention: System Maintenance]</b> GoBusiness payment service is unavailable due to maintenance on 8 Dec 2022 12pm to 2pm. We apologise for the inconvenience caused.",
  //[**L1T adhoc**]
  //"<b>[Important Announcement]</b> Due to a fee revision, all draft applications for Early Childhood Development Centre Licence created before 30 November 2022 have been deleted. Please create a new one if you still wish to apply. We apologise for the inconvenience caused.",

  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness Licensing, Guided Journey for Food Services and Start a Business e-Adviser will experience intermittent delays from 25 Oct 2021, 9am to 27 Oct 2021 6pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers, Guided Journeys and Business Grants will be unavailable on 22 Apr 2022 from 10pm to 4pm due to scheduled maintenance. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> e-Advisers for Business Structure and Starting a Business will be unavailable due to scheduled maintenance on 8 Sep 2021 from 6pm to 8pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Dashboard's payment services will be unavailable due to scheduled maintenance on 25 May 2022 from 2.30pm to 6pm. All other services on GoBusiness will remain available. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Guided Journey for Food Services and Covid Services will be unavailable due to scheduled maintenance from 26 May 2022 7pm to 27 May 2022 6am. All other services on GoBusiness will remain available.  We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Business Grant Portal will be undergoing scheduled maintenance on 8 April 2022 from 6:00 PM to 9:00 PM. We apologise for any inconvenience.",



  //[**ACRA DOWNTIME, BIZFILE + System Downtime**]
  //"<b>[Attention: System Maintenance]</b> The following services will be unavailable due to scheduled maintenance from 20 Aug 2022 12am to 12pm: Name reservation application and business registration for Sole Proprietorship/Partnership, and information from ACRA for GoBusiness and Business Grants. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> Name reservation application and business registration for Sole Proprietorship/Partnership will be unavailable due to scheduled maintenance on from 26 May 2023 10pm to 26 May 11.59pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Name reservation application and business registration for Sole Proprietorship/Partnership will be unavailable on dates below due to scheduled maintenance. We apologise for the inconvenience caused.<br>(1) From 18 May 2023 10pm to 19 May 2023 3am<br>(2) From 20 May 2023 6pm to 21 May 2023 2am",

  //[**FS Downtime**]
  //"<b>[Attention: System Maintenance]</b> Guided Journey for Food Services will be unavailable due to scheduled maintenance on 16 February 2023 from 6pm to 7pm. Other services on GoBusiness will remain available. We apologise for the inconvenience caused."

  //[**LICENSING AGENCY DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers and Guided Journeys will be unavailable due to scheduled maintenance till 5 October 2021 12pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on from 4 Jun 2022 2pm to 5 Jun 2022 12am. We apologise for the inconvenience caused."

  //[**NEA DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> Application, amendment, renewal & cancellation of National Environment Agency (NEA) licences will be unavailable during the upcoming scheduled maintenance on 24 May 2023 from 6:30pm to 11:59pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Application, amendment, renewal & cancellation of National Environment Agency (NEA) licences will be unavailable during the upcoming scheduled maintenance on 10 May 2023 from 6.30pm to 8.30pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Application, amendment, renewal & cancellation of National Environment Agency (NEA) licences will be unavailable during the upcoming scheduled maintenance on 31 May 2023 from 6.30pm to 8.30pm. We apologise for the inconvenience caused.",

  //[**ACRA DOWNTIME, affecting BGP and FS**]
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on 10 Feb 2023 from 12am to 5am. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Information from ACRA and MyInfo for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on 4 Dec 2022 from 12am to 4pm. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> Name reservation application and business registration for Sole Proprietorship/Partnership will be unavailable due to scheduled maintenance from 01 Jun 2023 8pm to 11.30pm. We apologise for the inconvenience caused.",

  //[PWMark]
  "<b>[Attention: System Maintenance]</b> Progressive Wage (PW) Mark will be unavailable due to scheduled maintenance from 1 Jun 2023 7pm to 3 Jun 2023 3:30am. We apologise for the inconvenience caused.",

  //[**SPF DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> Application, amendment & renewing of Singapore Police Force (SPF) licences will be unavailable during the upcoming scheduled maintenance on 4 Jun 2023 from 12:01am to 8am. <b>All other licences in Guided Journey for Food Services will remain available.</b> We apologise for the inconvenience caused.",

  //[**LICENCEONE DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to a scheduled maintenance on 20 Oct 2022 from 6pm to 10pm. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to an urgent maintenance from 2 Sep 2022 2pm to 4pm. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable on the dates below due to scheduled maintenance. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.<br>(1) From 10 Feb 2023 10pm to 11 Feb 2023 6am<br>(2) from 11 Feb 2023 10pm to 12 Feb 2023 10am",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to maintenance from 1 Mar 2023 10pm to 2 Mar 2022 6am. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to scheduled maintenance from 6 Apr 2023 10pm to 7 Apr 2023 6am. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable on the dates below due to scheduled maintenance. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.<br>(1) From 28 Apr 2023 10pm to 29 Apr 2023 8am<br>(2) from 29 Apr 2023 10pm to 30 Apr 2023 8am"
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to maintenance from 26 May 2023 10pm to 27 May 2022 8am. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to scheduled maintenance. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.<br>(1) From 26 May 2023 10pm to 27 May 2022 8am<br>(2) From 27 May 2023 10pm to 28 May 2023 8am"
  "<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable on the dates below due to scheduled maintenance. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.<br>(1) From 1 Jun 2023 10pm to 2 Jun 2023 6am<br>(2) From 5 Jun 2023 10pm to 6 Jun 2023 6am",

  //[**APEX / EDH**]
  //"<b>[Attention: System Maintenance]</b> GoBusiness will be unavailable due to scheduled maintenance. We apologise for the inconvenience caused.<br>(1) From 18 May 2023 10pm to 19 May 2023 3am<br>(2) From 20 May 2023 6pm to 21 May 2023 2am",
  "<b>[Attention: System Maintenance]</b> GoBusiness will be unavailable due to scheduled maintenance on 4 Jun 2023 from 12:01am to 8am. We apologise for the inconvenience caused."

  


  //[**ECDA DOWNTIME**]
  ///"<b>[Attention: System Maintenance]</b> Application, amendment, renewal & cancellation of Early Childhood Development Centre licence will be unavailable during the upcoming scheduled maintenance 5 May 2023 from 7pm to 9pm. We apologise for the inconvenience caused",

  //[**SINGPASS**]
  //"<b>[Attention: System Maintenance]</b> Singpass will be unavailable for GoBusiness due to scheduled maintenance on 4 Dec 2022 from 12am to 6am. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Dashboard FAQ and My Task page will be unavailable due to scheduled maintenance from 31 Aug 2022 5pm to 6pm. We apologise for the inconvenience caused."
  //"Some users may be experiencing difficulties accessing digital services with Singpass. Kindly be advised that Singpass is working on resolving this issue. We apologies for any inconvenience caused.", 

  //[**ADHOC**]
  //IPOS DOWNTIME
  //"<b>[Attention: System Maintenance]</b> The business name search feature of e-Adviser for Starting a Business is under maintanence. All other features will remain available and you may still use the e-Adviser. We apologise for the inconvenience caused.",
  //L1T ARC DOWNTIME

  


  //[**GCC Migration**]
  //"<b>[Attention: System Maintenance]</b> Guided Journey and e-Advisers will be unavailable due to scheduled maintenance on 6 Nov 2022 from 12am to 8am. All other services on GoBusiness will remain available.  We apologise for the inconvenience caused.",


  //

];

// Do not edit the following code

const custom_notificationContainer = `<div class="notifications-container" role="complementary" aria-label="announcement"></div>`;
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
