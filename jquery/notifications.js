// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [

  //1 system downtime only
  //"<b>[Attention: System Maintenance]</b> Please view the <u><a href='https://go.gov.sg/gobiz-maintenance-notice' target='_blank' rel='noopener'>upcoming maintenance schedule</a></u> for details. We apologise for the inconvenience caused."
  //multiple services
  "<b>[Attention: System Maintenance]</b> Certain GoBusiness services will be unavailable due to upcoming maintenance. Please check our <B><u><a href='https://go.gov.sg/gobiz-maintenance-notice' target='_blank' rel='noopener'>maintenance schedule</a></u></B> for details.", 
  "<b>[Attention: Important Announcement]</b> Please be informed that all services on the GoBusiness Licensing portal will cease operations from 6 April 25, 18:00 hrs onwards.<br> You may continue to apply for licences on GoBusiness at <u><a href='https://www.gobusiness.gov.sg/licences' target='_blank' rel='noopener'>www.gobusiness.gov.sg/licences</a></u>.<br> For SFA licences, please apply at <u><a href='https://licence1.business.gov.sg/licence1/authentication/showLogin.action' target='_blank' rel='noopener'>licence1.business.gov.sg/licence1/authentication/showLogin.action</a></u>.",
  "<b>[Attention: Important Announcement]</b> For enquiries related to Private Investigator & Security Officer Staff Grade, Training Status, Training Records and Notification of Employments, please visit the e-services in SPF website at <u><a href='https://eservices1.police.gov.sg/phub/eservices/landingpage/enquiry-on-private-security-licence' target='_blank' rel='noopener'>https://eservices1.police.gov.sg/phub/eservices/landingpage/enquiry-on-private-security-licence</a></u>.<br> For enquiries related to records of deployment sites submitted by Security Agencies, please email to <B><U>SPF_PLRD_SID@spf.gov.sg</u></B> or contact PLRD Hotline at +65 6835 0000.",
  "<b>[Attention: Important Announcement]</b> Please be informed that Gobusiness licensing helpdesk will not be operating on Saturday, 3 May 2025, in observance of Polling Day. Our services will resume on Monday, 5 May 2025.",

  
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
