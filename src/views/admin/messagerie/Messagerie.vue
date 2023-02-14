<template>
    <div>
        <div class="app-content content">
            <div class="sidebar-left">
                <div class="sidebar">
                    <!-- app chat user profile left sidebar start -->
                    <div class="chat-user-profile">
                        <header class="chat-user-profile-header text-center border-bottom">
                            <span class="chat-profile-close">
                                <i class="ft-x"></i>
                            </span>
                            <div class="my-2">

                                <img src="/hospital/app-assets/images/portrait/small/avatar-s-11.png" class="round mb-1" alt="user_avatar" height="100" width="100">

                                <h5 class="mb-0">John Doe</h5>
                                <span>Designer</span>
                            </div>
                        </header>
                        <div class="chat-user-profile-content">
                            <div class="chat-user-profile-scroll ps ps--active-y">
                                <h6 class="text-uppercase mb-1">ABOUT</h6>
                                <p class="mb-2">It is a long established fact that a reader will be distracted by the readable content .</p>
                                <h6>PERSONAL INFORAMTION</h6>
                                <ul class="list-unstyled mb-2">
                                    <li class="mb-25">email@gmail.com</li>
                                    <li>+1(789) 950 -7654</li>
                                </ul>
                               
                                <h6 class="text-uppercase mb-1">SETTINGS</h6>
                                <ul class="list-unstyled">
                                    <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="ft-tag mr-50"></i>
                                            Add
                                            Tag</a></li>
                                    <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="ft-star mr-50"></i>
                                            Important Contact</a>
                                    </li>
                                    <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="ft-image mr-50"></i>
                                            Shared
                                            Documents</a></li>
                                    <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="ft-trash-2 mr-50"></i>
                                            Deleted
                                            Documents</a></li>
                                    <li><a href="javascript:void(0);" class="d-flex align-items-center"><i class="ft-x-circle mr-50"></i> Blocked
                                            Contact</a></li>
                                </ul>
                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 343px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 207px;"></div></div></div>
                        </div>
                    </div>
                    <!-- app chat user profile left sidebar ends -->
                    <!-- app chat sidebar start -->
                    <div class="chat-sidebar card">
                        <span class="chat-sidebar-close">
                            <i class="ft-x"></i>
                        </span>
                        <div class="chat-sidebar-search">
                            <div class="d-flex align-items-center">
                                <div class="chat-sidebar-profile-toggle">
                                    <div class="avatar">
                                        <img src="/hospital/app-assets/images/portrait/small/avatar-s-11.png" class="cursor-pointer" alt="user_avatar" height="36" width="36">
                                    </div>
                                </div>
                                <fieldset class="form-group position-relative has-icon-left mx-75 mb-0">
                                    <input type="text" class="form-control round" id="chat-search" placeholder="Search">
                                    <div class="form-control-position">
                                        <i class="ft-search text-dark"></i>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div class="chat-sidebar-list-wrapper pt-2 ps ps--active-y">
                           
                            <h6 class="px-2 pt-2 pb-25 mb-0">CHATS</h6>
                            <ul class="chat-sidebar-list">
                                <li class="active">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar m-0 mr-50"><img src="/hospital/app-assets/images/portrait/small/avatar-s-26.png" height="36" width="36" alt="sidebar user image">
                                            <span class="avatar-status-busy"></span>
                                        </div>
                                        <div class="chat-sidebar-name">
                                            <h6 class="mb-0">Elizabeth Elliott</h6><span class="text-muted">Cake pie</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="avatar m-0 mr-50"><img src="/hospital/app-assets/images/portrait/small/avatar-s-7.png" height="36" width="36" alt="sidebar user image">
                                            <span class="avatar-status-online"></span>
                                        </div>
                                        <div class="chat-sidebar-name">
                                            <h6 class="mb-0">Kristopher Candy</h6><span class="text-muted">jelly jelly</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                        <div class="ps__rail-x" style="left: 0px; bottom: -372px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 372px; height: 484px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 211px; height: 273px;"></div></div></div>
                    </div>
                    <!-- app chat sidebar ends -->

                </div>
            </div>
            <div class="content-right">
                <div class="content-overlay"></div>
                <div class="content-wrapper">
                    <div class="content-header row">
                    </div>
                    <div class="content-body">
                        <!-- app chat overlay -->
                        <div class="chat-overlay"></div>
                        <!-- app chat window start -->
                        <section class="chat-window-wrapper">
                            <div class="chat-start d-none">
                                <span class="ft-message-square chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1"></span>
                                <h4 class="d-none d-lg-block py-50 text-bold-500">Select a contact to start a chat!</h4>
                                <button class="btn btn-light-primary chat-start-text chat-sidebar-toggle d-block d-lg-none py-50 px-1">Start
                                    Conversation!</button>
                            </div>
                            <div class="chat-area">
                                <div class="chat-header">
                                    <header class="d-flex justify-content-between align-items-center px-1 py-75">
                                        <div class="d-flex align-items-center">
                                            <div class="chat-sidebar-toggle d-block d-lg-none mr-1"><i class="ft-align-justify font-large-1 cursor-pointer"></i>
                                            </div>
                                            <div class="avatar chat-profile-toggle m-0 mr-1">
                                                <img src="/hospital/app-assets/images/portrait/small/avatar-s-26.png" class="cursor-pointer" alt="avatar" height="36" width="36">
                                                <span class="avatar-status-busy"></span>
                                            </div>
                                            <h6 class="mb-0">Elizabeth Elliott</h6>
                                        </div>
                                        <div class="chat-header-icons">
                                            <span class="chat-icon-favorite">
                                                <i class="ft-star font-medium-5 cursor-pointer"></i>
                                            </span>
                                            <span class="dropdown">
                                                <i class="ft-more-vertical font-medium-4 ml-25 cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                                </i>
                                                <span class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="JavaScript:void(0);"><i class="ft-tag mr-25"></i> Pin to top</a>
                                                    <a class="dropdown-item" href="JavaScript:void(0);"><i class="ft-trash-2 mr-25"></i> Delete chat</a>
                                                    <a class="dropdown-item" href="JavaScript:void(0);"><i class="ft-x-circle mr-25"></i> Block</a>
                                                </span>
                                            </span>
                                        </div>
                                    </header>
                                </div>
                                <!-- chat card start -->
                                <div class="card chat-wrapper shadow-none mb-0">
                                    <div class="card-content">
                                        <div class="card-body chat-container ps ps--active-y">
                                            <div class="chat-content">
                                                <div class="chat">
                                                    <div class="chat-avatar">
                                                        <a class="avatar m-0">
                                                            <img src="/hospital/app-assets/images/portrait/small/avatar-s-11.png" alt="avatar" height="36" width="36">
                                                        </a>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <p>How can we help? We're here for you! 😄</p>
                                                            <span class="chat-time">7:45 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat chat-left">
                                                    <div class="chat-avatar">
                                                        <a class="avatar m-0">
                                                            <img src="/hospital/app-assets/images/portrait/small/avatar-s-26.png" alt="avatar" height="36" width="36">
                                                        </a>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <p>Hey John, I am looking for the best admin template.</p>
                                                            <p>Could you please help me to find it out? 🤔</p>
                                                            <span class="chat-time">7:50 AM</span>
                                                        </div>
                                                        <div class="chat-message">
                                                            <p>It should be Bootstrap 4 🤩 compatible.</p>
                                                            <span class="chat-time">7:58 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="badge badge-pill badge-light-secondary my-1">Yesterday</div>
                                                <div class="chat">
                                                    <div class="chat-avatar">
                                                        <a class="avatar m-0">
                                                            <img src="/hospital/app-assets/images/portrait/small/avatar-s-11.png" alt="avatar" height="36" width="36">
                                                        </a>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <p>Absolutely!</p>
                                                            <span class="chat-time">8:00 AM</span>
                                                        </div>
                                                        <div class="chat-message">
                                                            <p>modern admin is the responsive bootstrap 4 admin template.</p>
                                                            <span class="chat-time">8:01 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat chat-left">
                                                    <div class="chat-avatar">
                                                        <a class="avatar m-0">
                                                            <img src="/hospital/app-assets/images/portrait/small/avatar-s-26.png" alt="avatar" height="36" width="36">
                                                        </a>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <p>Looks clean and fresh UI. 😃</p>
                                                            <span class="chat-time">10:12 AM</span>
                                                        </div>
                                                        <div class="chat-message">
                                                            <p>It's perfect for my next project.</p>
                                                            <span class="chat-time">10:15 AM</span>
                                                        </div>
                                                        <div class="chat-message">
                                                            <p>How can I purchase 🤑 it?</p>
                                                            <span class="chat-time">10:18 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat">
                                                    <div class="chat-avatar">
                                                        <a class="avatar m-0">
                                                            <img src="/hospital/app-assets/images/portrait/small/avatar-s-11.png" alt="avatar" height="36" width="36">
                                                        </a>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <p>Thanks 🤝 , from ThemeForest.</p>
                                                            <span class="chat-time">10:20 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat chat-left">
                                                    <div class="chat-avatar">
                                                        <a class="avatar m-0">
                                                            <img src="/hospital/app-assets/images/portrait/small/avatar-s-26.png" alt="avatar" height="36" width="36">
                                                        </a>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <p>I will purchase it for sure. 👍</p>
                                                            <span class="chat-time">3:32 PM</span>
                                                        </div>
                                                        <div class="chat-message">
                                                            <p>Thanks.</p>
                                                            <span class="chat-time">3:33 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat">
                                                    <div class="chat-avatar">
                                                        <a class="avatar m-0">
                                                            <img src="/hospital/app-assets/images/portrait/small/avatar-s-11.png" alt="avatar" height="36" width="36">
                                                        </a>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <p>Great, Feel free to get in touch on</p>
                                                            <span class="chat-time">3:34 AM</span>
                                                        </div>
                                                        <div class="chat-message">
                                                            <p>https://pixinvent.ticksy.com/</p>
                                                            <span class="chat-time">3:35 AM</span>
                                                        </div>
                                                    <div class="chat-message"><p>mlmkmk</p><div class="chat-time">3:35 AM</div></div></div>
                                                </div>
                                            </div>
                                        <div class="ps__rail-x" style="left: 0px; bottom: -644px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 644px; right: 0px; height: 413px;"><div class="ps__thumb-y" tabindex="0" style="top: 252px; height: 161px;"></div></div></div>
                                    </div>
                                    <div class="card-footer chat-footer px-2 py-1 pb-0">
                                        <form class="d-flex align-items-center" onsubmit="chatMessagesSend();" action="javascript:void(0);">
                                            <i class="ft-user cursor-pointer"></i>
                                            <i class="ft-paperclip ml-1 cursor-pointer"></i>
                                            <input type="text" class="form-control chat-message-send mx-1" placeholder="Type your message here...">
                                            <button type="submit" class="btn btn-primary glow send d-lg-flex"><i class="ft-play"></i>
                                                <span class="d-none d-lg-block mx-50">Send</span></button>
                                        </form>
                                    </div>
                                </div>
                                <!-- chat card ends -->
                            </div>
                        </section>
                        <!-- app chat window ends -->
                        <!-- app chat profile right sidebar start -->
                        <section class="chat-profile">
                            <header class="chat-profile-header text-center border-bottom">
                                <span class="chat-profile-close">
                                    <i class="ft-x"></i>
                                </span>
                                <div class="my-2">

                                    <img src="/hospital/app-assets/images/portrait/small/avatar-s-26.png" class="round mb-1" alt="chat avatar" height="100" width="100">

                                    <h5 class="app-chat-user-name mb-0">Elizabeth Elliott</h5>
                                    <span>Devloper</span>
                                </div>
                            </header>
                            <div class="chat-profile-content p-2 ps">
                                <h6 class="mt-1">ABOUT</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                <h6 class="mt-2">PERSONAL INFORMATION</h6>
                                <ul class="list-unstyled">
                                    <li class="mb-25">email@gmail.com</li>
                                    <li>+1(789) 950-7654</li>
                                </ul>
                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                        </section>
                        <!-- app chat profile right sidebar ends -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Messagerie'
}
</script>

<style>

</style>