export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'lead',
                    title: 'Lead',
                    type: 'item',
                    url: '/lead',
                    
                    
                },
                {
                    id: 'messages',
                    title: 'MESSAGES',
                    type: 'item',
                    url: '/messages',
                    
                },
                {
                    id: 'referals',
                    title: 'REFERALS',
                    type: 'item',
                    url: '/referals',
                    
                },
                {
                    id: 'task',
                    title: 'TASK',
                    type: 'item',
                    url: '/task/task',
                   
                },
                {
                    id: 'dashboard',
                    title: 'DASHBOARD',
                    type: 'item',
                    url: '/dashboard/default',
                    
                },
                {
                    id: 'configuration',
                    title: 'CONFIGURATION',
                    type: 'collapse',
                    children: [
                        {
                            id: 'signature',
                            title: 'Signature',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'basic',
                                    title: 'Basic',
                                    type: 'item',
                                    url: '/confiuration/signature',
                                },
                                {
                                    id: 'adding',
                                    title: 'Signature Add',
                                    type: 'item',
                                    url: '/confiuration/signature/adding',
                                },
                                {
                                    id: 'signature',
                                    title: 'signature',
                                    type: 'item',
                                    url: '/confiuration/signature/signature',
                                }
                            ]
                        },
                        {
                            id: 'template menu',
                            title: 'TEMPLATE MENU',
                            type: 'collapse',
                            children: [
                               
                                {
                                    id: 'email_tmp_list',
                                    title: 'Email List',
                                    type: 'item',
                                    url: '/confiuration/template_menu/EmailTemplateList',
                                },
                                {
                                    id: 'script_list',
                                    title: 'Script List',
                                    type: 'item',
                                    url: '/confiuration/template_menu/ScriptTemplateList',
                                },
                                {
                                    id: 'text_list',
                                    title: 'Text List',
                                    type: 'item',
                                    url: '/confiuration/template_menu/TextTemplateList',
                                }
                            ]
                        },
                        {
                            id: 'template creation',
                            title: 'TEMPLATE CREATION',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'list',
                                    title: 'Template List',
                                    type: 'item',
                                    url: '/confiuration/creation',
                                },
                                {
                                    id: 'email',
                                    title: 'Email',
                                    type: 'item',
                                    url: '/confiuration/creation/EmailTemplateCreation',
                                },
                                {
                                    id: 'script',
                                    title: 'Script',
                                    type: 'item',
                                    url: '/confiuration/creation/ScriptCreation',
                                },
                                {
                                    id: 'text',
                                    title: 'Text',
                                    type: 'item',
                                    url: '/confiuration/creation/TextCreation',
                                }
                                
                            ]
                        },
                        {
                            id: 'campaign',
                            title: 'CAMPAIGN',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'basic_campaign',
                                    title: 'Basic',
                                    type: 'item',
                                    url: '/Campaign/Basic',
                                },
                                {
                                    id: 'email_campaign',
                                    title: 'Email Campaign',
                                    type: 'item',
                                    url: '/Campaign/EmailCampaignCreation/BlastCampaign/Blast'
                                    // children: [                      
                                    //     {
                                    //         id: 'campaign_creation',
                                    //         title: 'Campaign Creation',
                                    //         type: 'item',   
                                    //         url: '/Campaign/EmailCampaignCreation/BlastCampaign/Blast'
                                    //     },
                                    //     {
                                    //         id: 'drip',
                                    //         title: 'Drip Email Campaign',
                                    //         type: 'item',
                                    //         url: '/Campaign/EmailCampaignCreation/DripEmailCampaign/Drip',
                                    //     },
                                    //     {
                                    //         id: 'status',
                                    //         title: 'Status Campaign',    
                                    //         type: 'item',
                                    //         url: '/Campaign/EmailCampaignCreation/EmailCampaign/Status',
                                    //     },
                                        
                                    // ]
                                },
                                {
                                    id: 'text_campaign',
                                    title: 'Text Campaign',
                                    type: 'item',
                                    url: '/Campaign/TextCampaign/BlastCampaign/Blast'
                                    // children: [                      
                                    //     {
                                    //         id: 'campaign_creation',
                                    //         title: 'Campaign Creation',
                                    //         type: 'item',   
                                    //         url: '/Campaign/TextCampaign/BlastCampaign/Blast'
                                    //     },
                                    //     {
                                    //         id: 'drip',
                                    //         title: 'Drip Email Campaign',
                                    //         type: 'item',
                                    //         url: '/Campaign/TextCampaign/DripEmailCampaign/Drip',
                                    //     },
                                    //     {
                                    //         id: 'status',
                                    //         title: 'Status Campaign',    
                                    //         type: 'item',
                                    //         url: '/Campaign/TextCampaign/EmailCampaign/Status',
                                    //     },
                                        
                                    // ]
                                },
                                {
                                    id: 'dialer_campaign',
                                    title: 'Dialer Campaign',
                                    type: 'collapse',
                                    children: [      
                                        {
                                            id: 'main_dialer',
                                            title: 'Main Dialer',
                                            type: 'item',   
                                            url: '/Campaign/DialerCampaign/PredictiveCampaign/Predict'
                                        },                
                                        // {
                                        //     id: 'predictive',
                                        //     title: 'Predictive',
                                        //     type: 'item',   
                                        //     url: '/Campaign/DialerCampaign/PredictiveCampaign/Predict'
                                        // },
                                        // {
                                        //     id: 'progressive',
                                        //     title: 'Progressive',
                                        //     type: 'item',
                                        //     url: '/Campaign/DialerCampaign/Progressivecampaign/Progress',
                                        // },
                                        {
                                            id: 'dialertable',
                                            title: 'Dialer Table',
                                            type: 'item',
                                            url: '/Campaign/DialerCampaign/DialerTable',
                                        },
                                        
                                    ]
                                },
                                {
                                    id: 'ivr_campaign',
                                    title: 'IVR Campaign',
                                    type: 'collapse',
                                    children: [                      
                                        {
                                            id: 'InboundIVR',
                                            title: 'InboundIVR',
                                            type: 'item',
                                            url: '/Campaign/IVRCampaign/InboundIVR/Single'
                                            // children: [                      
                                            //     {
                                            //         id: 'single',
                                            //         title: 'Single',
                                            //         type: 'item',   
                                            //         url: '/Campaign/IVRCampaign/InboundIVR/Single' 
                                            //     },
                                            //     {
                                            //         id: 'multi',
                                            //         title: 'Multi',
                                            //         type: 'item',   
                                            //         url: '/Campaign/IVRCampaign/InboundIVR/Multi' 
                                            //     },
                                                   
                                            // ]
        
                                        },
                                        {
                                            id: 'LocalCaller',
                                            title: 'LocalCaller',
                                            type: 'item',
                                            url: '/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalCallerSingle'
                                            // children: [                      
                                            //     {
                                            //         id: 'localsingle',
                                            //         title: 'Local Caller Single',
                                            //         type: 'item',   
                                            //         url: '/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalCallerSingle' 
                                            //     },
                                            //     {
                                            //         id: 'local_caller_multi',
                                            //         title: 'Local Caller Multi',
                                            //         type: 'item',   
                                            //         url: '/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalCallerMultiple' 
                                            //     },
                                                   
                                            // ]
        
                                        },    
                                        {
                                            id: 'voiceblast',
                                            title: 'VoiceBlast',
                                            type: 'collapse',
                                            children: [  
                                                {
                                                    id: 'main_voiceblast',
                                                    title: 'Main Voiceblast',
                                                    type: 'item',   
                                                    url: '/Campaign/IVRCampaign/Voiceblast/Single' 
                                                },                    
                                                // {
                                                //     id: 'voiceblast_single',
                                                //     title: 'Single',
                                                //     type: 'item',   
                                                //     url: '/Campaign/IVRCampaign/Voiceblast/Single' 
                                                // },
                                                // {
                                                //     id: 'voiceblast_multi',
                                                //     title: 'Multi',
                                                //     type: 'item',   
                                                //     url: '/Campaign/IVRCampaign/Voiceblast/Multi' 
                                                // },
                                                {
                                                    id: 'setting',
                                                    title: 'Setting',
                                                    type: 'item',   
                                                    url: '/Campaign/IVRCampaign/Voiceblast/Setting' 
                                                },
                                                   
                                            ]
        
                                        },    
                                        {
                                            id: 'ivr_noti',
                                            title: 'Ivr Notification',
                                            type: 'item',
                                            url: '/Campaign/IVRCampaign/OutgoingNoti/Ivr_Noti'
                                        },    
                                        {
                                            id: 'IvirTable',
                                            title: 'IvirTable',
                                            type: 'item',
                                            url: '/Campaign/IVRCampaign/IvirTable'
                                        },    
                                           
                                    ]

                                }        
                                
                            ]
                        }
                    ]
                },
                {
                    id: 'manage',
                    title: 'MANAGE',
                    type: 'collapse',
                    children: [  
                        {
                            id: 'main_voiceblast',
                            title: 'Main Voiceblast',
                            type: 'item',   
                            url: '/manage/Branch_Status' 
                        },                    
                        {
                            id: 'status_manage',
                            title: 'Status Manage',
                            type: 'item',   
                            url: '/manage/Status_Manage' 
                        }, 
                        {
                            id: 'webhook_manage',
                            title: 'Webhook Manage',
                            type: 'item',   
                            url: '/manage/Webhook_Manage' 
                        }, 
                        {
                            id: 'tag_manage',
                            title: 'Distribution & Tags',
                            type: 'item',   
                            url: '/manage/Tag_Manage' 
                        }, 
                        {
                            id: 'lead_manage',
                            title: 'Lead Source',
                            type: 'item',   
                            url: '/manage/Lead_Manage' 
                        },
                        {
                            id: 'import_manage',
                            title: 'Import CSV File',
                            type: 'item',   
                            url: '/manage/Import_Manage' 
                        }, 
                        {
                            id: 'all_noti',
                            title: 'All Notification',
                            type: 'item',   
                            url: '/manage/All_Noti' 
                        }, 
                    ]
                },
                {
                    id: 'settings',
                    title: 'SETTING',
                    type: 'item',
                    url: '/setting'
                    
                }
            ]
        },
        
    ]
    
}