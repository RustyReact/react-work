import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const SignIn1 = React.lazy(() => import('./Features/Authentication/SignIn/SignIn1'));
const Lead = React.lazy(() => import('./Features/Lead/Lead'));
const Dashboard = React.lazy(() => import('./Features/Dashboard/Default'));

const Creation = React.lazy(() => import('./Features/config/Creation'));
const ScriptCreation = React.lazy(() => import('./Features/config/ScriptCreation'));
const TextCreation = React.lazy(() => import('./Features/config/TextCreation'));
const config = React.lazy(() => import('./Features/config/Sinaturebasic'));
const signature = React.lazy(() => import('./Features/config/Signature'));
const EmailTemplateCreation = React.lazy(() => import('./Features/config/EmailTemplateCreation'));
const adding = React.lazy(() => import('./Features/config/TemplateMenu'));
const EmailTemplate = React.lazy(() => import('./Features/config/EmailTemplate'));
const EmailTemplateList = React.lazy(() => import('./Features/config/EmailTemplateList'));
const ScriptTemplateList = React.lazy(() => import('./Features/config/ScriptTemplateList'));
const TextTemplateList = React.lazy(() => import('./Features/config/TextTemplateList'));

const Basic = React.lazy(() => import('./Features/campaign/Basic'));
const Blast = React.lazy(() => import('./Features/campaign/EmailCampaignCreation/BlastCampaign/Blast'));
const Wireframe = React.lazy(() => import('./Features/campaign/EmailCampaignCreation/BlastCampaign/Wireframe'));
const Status = React.lazy(() => import('./Features/campaign/EmailCampaignCreation/EmailCampaign/Status'));
const Status_Wire = React.lazy(() => import('./Features/campaign/EmailCampaignCreation/EmailCampaign/Wireframe'));
const Drip = React.lazy(() => import('./Features/campaign/EmailCampaignCreation/DripEmailCampaign/Drip'));
const Drip_Wire = React.lazy(() => import('./Features/campaign/EmailCampaignCreation/DripEmailCampaign/Wireframe'));

const Text_Blast = React.lazy(() => import('./Features/campaign/TextCampaign/BlastCampaign/Blast'));
const Text_Wireframe = React.lazy(() => import('./Features/campaign/TextCampaign/BlastCampaign/Wireframe'));
const Text_Status = React.lazy(() => import('./Features/campaign/TextCampaign/StatusDripCampaign/Status'));
const Text_Status_Wire = React.lazy(() => import('./Features/campaign/TextCampaign/StatusDripCampaign/Wireframe'));
const Text_Drip = React.lazy(() => import('./Features/campaign/TextCampaign/DripCampaign/Drip'));
const Text_Drip_Wire = React.lazy(() => import('./Features/campaign/TextCampaign/DripCampaign/Wireframe'));

const Dailer_Predict = React.lazy(() => import('./Features/campaign/DialerCampaign/PredictiveCampaign/Predict'));
const Dailer_Wireframe = React.lazy(() => import('./Features/campaign/DialerCampaign/PredictiveCampaign/Wireframe'));
const Dailer_Progress = React.lazy(() => import('./Features/campaign/DialerCampaign/Progressivecampaign/Progress'));
const Dailer_Progress_Wire = React.lazy(() => import('./Features/campaign/DialerCampaign/Progressivecampaign/Wireframe'));
const Dailer_Table = React.lazy(() => import('./Features/campaign/DialerCampaign/DialerTable'));

const Single = React.lazy(() => import('./Features/campaign/IVRCampaign/InboundIVR/SingleIVR/Single'));
const Single_Wireframe = React.lazy(() => import('./Features/campaign/IVRCampaign/InboundIVR/SingleIVR/Wireframe'));
const Multi = React.lazy(() => import('./Features/campaign/IVRCampaign/InboundIVR/MultilineOption/Multi'));
const Multi_Wireframe = React.lazy(() => import('./Features/campaign/IVRCampaign/InboundIVR/MultilineOption/Wireframe'));
const Ivir_Table = React.lazy(() => import('./Features/campaign/IVRCampaign/IvirTable'));

const LocalCallerSingle = React.lazy(() => import('./Features/campaign/IVRCampaign/LocalCaller/LocalCallerSingle/LocalCallerSingle'));
const Local_Single_Wireframe = React.lazy(() => import('./Features/campaign/IVRCampaign/LocalCaller/LocalCallerSingle/Wireframe'));
const LocalCallerMultiple = React.lazy(() => import('./Features/campaign/IVRCampaign/LocalCaller/LocalCallerMultiple/LocalCallerMulti'));
const Local_Multi_Wireframe = React.lazy(() => import('./Features/campaign/IVRCampaign/LocalCaller/LocalCallerMultiple/Wireframe'));

const Voiceblast_Single = React.lazy(() => import('./Features/campaign/IVRCampaign/Voiceblast/Single'));
const Voiceblast_Single_Wireframe = React.lazy(() => import('./Features/campaign/IVRCampaign/Voiceblast/SingleIVR/Wireframe'));
const Voiceblast_Multi = React.lazy(() => import('./Features/campaign/IVRCampaign/Voiceblast/Multi'));
const Voiceblast_Multi_Wireframe = React.lazy(() => import('./Features/campaign/IVRCampaign/Voiceblast/Multiline/Wireframe'));
const Setting = React.lazy(() => import('./Features/campaign/IVRCampaign/Voiceblast/Setting'));
const Ivr_Noti = React.lazy(() => import('./Features/campaign/IVRCampaign/OutgoingNoti/IvrNoti'));

const Branch_Status = React.lazy(() => import('./Features/manage/BranchStatus'));
const Status_Manage = React.lazy(() => import('./Features/manage/StatusManage'));
const Webhook_Manage = React.lazy(() => import('./Features/manage/WebhookManage'));
const Tag_Manage = React.lazy(() => import('./Features/manage/TagManage'));
const Lead_Manage = React.lazy(() => import('./Features/manage/LeadSource'));
const Import_Manage = React.lazy(() => import('./Features/manage/ImportCsv'));
const All_Noti = React.lazy(() => import('./Features/manage/AllNoti'));

const Task = React.lazy(() => import('./Features/task/task'));

const routes = [
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: SignIn1 },
    { path: '/lead', exact: true, name: 'Lead', component: Lead },
    { path: '/dashboard/default', exact: true, name: 'Dashboard', component: Dashboard },
    
    { path: '/confiuration/signature', exact: true, name: 'Signature', component: config },
    { path: '/confiuration/signature/adding', exact: true, name: 'Adding', component: adding },
    { path: '/confiuration/signature/signature', exact: true, name: 'Signature', component: signature },
    { path: '/confiuration/template_menu/EmailTemplate', exact: true, name: 'EmailTemplate', component: EmailTemplate },
    { path: '/confiuration/template_menu/EmailTemplateList', exact: true, name: 'EmailTemplateList', component: EmailTemplateList },
    { path: '/confiuration/template_menu/ScriptTemplateList', exact: true, name: 'ScriptTemplateList', component: ScriptTemplateList },
    { path: '/confiuration/template_menu/TextTemplateList', exact: true, name: 'TextTemplateList', component: TextTemplateList },
    { path: '/confiuration/creation', exact: true, name: 'Creation', component: Creation },
    { path: '/confiuration/creation/ScriptCreation', exact: true, name: 'ScriptCreation', component: ScriptCreation },
    { path: '/confiuration/creation/TextCreation', exact: true, name: 'TextCreation', component: TextCreation },
    { path: '/confiuration/creation/EmailTemplateCreation', exact: true, name: 'EmailTemplateCreation', component: EmailTemplateCreation },
    
    { path: '/Campaign/Basic', exact: true, name: 'Basic', component: Basic },

    { path: '/Campaign/EmailCampaignCreation/BlastCampaign/Blast', exact: true, name: 'Blast', component: Blast },
    { path: '/Campaign/EmailCampaignCreation/BlastCampaign/Wireframe', exact: true, name: 'Wireframe', component: Wireframe },
    { path: '/Campaign/EmailCampaignCreation/EmailCampaign/Status', exact: true, name: 'Status', component: Status },
    { path: '/Campaign/EmailCampaignCreation/EmailCampaign/Wireframe', exact: true, name: 'Status_Wire', component: Status_Wire },
    { path: '/Campaign/EmailCampaignCreation/DripEmailCampaign/Drip', exact: true, name: 'Drip', component: Drip },
    { path: '/Campaign/EmailCampaignCreation/DripEmailCampaign/Wireframe', exact: true, name: 'Drip_Wire', component: Drip_Wire },

    { path: '/Campaign/TextCampaign/BlastCampaign/Blast', exact: true, name: 'Text Blast', component: Text_Blast },
    { path: '/Campaign/TextCampaign/BlastCampaign/Wireframe', exact: true, name: 'Text Wireframe', component: Text_Wireframe },
    { path: '/Campaign/TextCampaign/EmailCampaign/Status', exact: true, name: 'Text Status', component: Text_Status },
    { path: '/Campaign/TextCampaign/EmailCampaign/Wireframe', exact: true, name: 'Text Status Wireframe', component: Text_Status_Wire },
    { path: '/Campaign/TextCampaign/DripEmailCampaign/Drip', exact: true, name: 'Text Drip', component: Text_Drip },
    { path: '/Campaign/TextCampaign/DripEmailCampaign/Wireframe', exact: true, name: 'Text Drip Wireframe', component: Text_Drip_Wire },
    
    { path: '/Campaign/DialerCampaign/PredictiveCampaign/Predict', exact: true, name: 'Dailer Blast', component: Dailer_Predict },
    { path: '/Campaign/DialerCampaign/PredictiveCampaign/Wireframe', exact: true, name: 'Dailer Wireframe', component: Dailer_Wireframe },
    { path: '/Campaign/DialerCampaign/Progressivecampaign/Progress', exact: true, name: 'Dailer Drip', component: Dailer_Progress },
    { path: '/Campaign/DialerCampaign/Progressivecampaign/Wireframe', exact: true, name: 'Dailer Drip Wireframe', component: Dailer_Progress_Wire },
    { path: '/Campaign/DialerCampaign/DialerTable', exact: true, name: 'Dailer Table', component: Dailer_Table },

    { path: '/Campaign/IVRCampaign/InboundIVR/Single', exact: true, name: 'Single', component: Single },
    { path: '/Campaign/IVRCampaign/InboundIVR/Single/Wireframe', exact: true, name: 'Single Wireframe', component: Single_Wireframe },
    { path: '/Campaign/IVRCampaign/InboundIVR/Multi', exact: true, name: 'Multi', component: Multi },
    { path: '/Campaign/IVRCampaign/InboundIVR/Multi/Wireframe', exact: true, name: 'Multi Wireframe', component: Multi_Wireframe },
    { path: '/Campaign/IVRCampaign/IvirTable', exact: true, name: 'Ivir Table', component: Ivir_Table },

    { path: '/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalCallerSingle', exact: true, name: 'LocalCallerSingle', component: LocalCallerSingle },
    { path: '/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalSingleWireframe', exact: true, name: 'Local Single Wireframe', component: Local_Single_Wireframe },
    { path: '/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalCallerMultiple', exact: true, name: 'LocalCallerMultiple', component: LocalCallerMultiple },
    { path: '/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalMultiWireframe', exact: true, name: 'Local Multi Wireframe', component: Local_Multi_Wireframe },

    { path: '/Campaign/IVRCampaign/Voiceblast/Single', exact: true, name: 'Single', component: Voiceblast_Single },
    { path: '/Campaign/IVRCampaign/Voiceblast/Single_Wireframe', exact: true, name: 'Single', component: Voiceblast_Single_Wireframe },
    { path: '/Campaign/IVRCampaign/Voiceblast/Multi', exact: true, name: 'Multi', component: Voiceblast_Multi },
    { path: '/Campaign/IVRCampaign/Voiceblast/Multi_Wireframe', exact: true, name: 'Multi', component: Voiceblast_Multi_Wireframe },
    { path: '/Campaign/IVRCampaign/Voiceblast/Setting', exact: true, name: 'Setting', component: Setting },
    { path: '/Campaign/IVRCampaign/OutgoingNoti/Ivr_Noti', exact: true, name: 'Ivr Noti', component: Ivr_Noti },

    { path: '/manage/Branch_Status', exact: true, name: 'Branch Status', component: Branch_Status },
    { path: '/manage/Status_Manage', exact: true, name: 'Status Manage', component: Status_Manage },
    { path: '/manage/Webhook_Manage', exact: true, name: 'Webhook Manage', component: Webhook_Manage },
    { path: '/manage/Tag_Manage', exact: true, name: 'Tag Manage', component: Tag_Manage },
    { path: '/manage/Lead_Manage', exact: true, name: 'Lead Source', component: Lead_Manage },
    { path: '/manage/Import_Manage', exact: true, name: 'Import CSV file', component: Import_Manage },
    { path: '/manage/All_Noti', exact: true, name: 'All Notification', component: All_Noti },

    { path: '/task/task', exact: true, name: 'Task', component: Task },
];

export default routes;