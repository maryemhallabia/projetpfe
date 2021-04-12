<template>
     <div class="nav-bar">
                  <div class="container-fluid">
                      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                          <a href="#" class="navbar-brand">الصفحة الرئيسية </a>
                          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                              <span class="navbar-toggler-icon"></span>
                          </button>
  
                          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="mr-auto">
                                <a class="btn" href="#"> الدخول</a>
                                <a class="btn" href="#">إشترك</a>
                            </div>
                              <div class="navbar-nav ml-auto">
                                  <a href="#" class="nav-item nav-link active">اتصل بنا </a>
                                  <a href="#" class="nav-item nav-link">آخر المستجدات</a>
                                  <a href="#" class="nav-item nav-link">معرض الصور</a>
<!--                                   <router-link to="/photos"> معرض الصور</router-link>
 -->                                  

                                  <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">انواع الأنشطة</a>
                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item">المنتديات</a>
                                        <a href="#" class="dropdown-item">انشطة الجمعية</a>
                                    </div>
                                </div>
                                 

                                  <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">تراث</a>
                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item">مخطوطات الجمعية</a>
                                        <a href="#" class="dropdown-item">الوثائق الارشيفية</a>
                                    </div>
                                </div>

                                  <div class="nav-item dropdown">
                                      <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">المكتبة العامة</a>
                                      <div class="dropdown-menu">
                                          <a href="#" class="dropdown-item">المخطوطات </a>
                                          <a href="#" class="dropdown-item">الوثائق البريدية </a>
                                          <a href="#" class="dropdown-item">جناح الساحل</a>
                                      </div>
                                  </div>
                                

                                  <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">الجمعية</a>
                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item">تعريف الجمعية </a>
                                        <a href="#" class="dropdown-item">قائمة الهيئة</a>
                                        <a href="#" class="dropdown-item">القانون الاساسي </a>
                                        <a href="#" class="dropdown-item">برنامج العام</a>
                                        <a href="#" class="dropdown-item">نشاط الجمعية</a>
                                        
                                    </div>
                                </div>

                              </div>
                             

                              

                          </div>
                      </nav>
                  </div>
                <!--  <router-view> </router-view> -->
              </div>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>