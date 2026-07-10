import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2 text-emerald-700">
          <mat-icon class="text-3xl">mosque</mat-icon>
          <span class="text-2xl font-extrabold tracking-tight">هدى</span>
        </div>
        <nav class="hidden md:flex gap-8 text-stone-600 font-medium">
          <a href="#" class="hover:text-emerald-600 transition-colors">الرئيسية</a>
          <a href="#" class="hover:text-emerald-600 transition-colors">القرآن الكريم</a>
          <a href="#" class="hover:text-emerald-600 transition-colors">الحديث</a>
          <a href="#" class="hover:text-emerald-600 transition-colors">الأذكار</a>
          <a href="#" class="hover:text-emerald-600 transition-colors">المقالات</a>
        </nav>
        <button class="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl font-medium transition-all shadow-sm">
          تسجيل الدخول
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="min-h-screen">
      <section class="relative overflow-hidden bg-emerald-900 text-white py-24 sm:py-32">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl sm:text-6xl font-extrabold mb-6">
            منصة إسلامية شاملة وموثوقة
          </h1>
          <p class="text-emerald-100 text-lg sm:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
            اقرأ القرآن، تتبع أوقات الصلاة، واكتشف محتوى إسلامي غني ومتنوع مصمم لتغذية روحك.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button class="bg-white text-emerald-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer">
              <mat-icon>menu_book</mat-icon>
              تصفح القرآن
            </button>
            <button class="bg-emerald-800/50 hover:bg-emerald-800 backdrop-blur-sm border border-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <mat-icon>explore</mat-icon>
              استكشف المحتوى
            </button>
          </div>
        </div>
      </section>

      <!-- Daily Content (Bento Grid) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 class="text-3xl font-bold text-stone-800 mb-10 flex items-center gap-2">
          <mat-icon class="text-emerald-600">wb_sunny</mat-icon>
          إشراقات اليوم
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Verse of the Day -->
          <div class="md:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div class="flex items-center gap-2 text-emerald-600 font-bold mb-6">
              <mat-icon>auto_stories</mat-icon>
              آية اليوم
            </div>
            <p class="font-amiri text-3xl sm:text-4xl leading-relaxed text-stone-800 mb-6 text-center">
              "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا"
            </p>
            <div class="text-stone-500 text-center font-medium">سورة الإسراء - الآية 9</div>
          </div>

          <!-- Prayer Times -->
          <div class="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 text-white shadow-md relative overflow-hidden">
             <div class="absolute -bottom-10 -right-10 opacity-20">
               <mat-icon style="font-size: 150px; width: 150px; height: 150px;">mosque</mat-icon>
             </div>
             <div class="relative z-10">
               <div class="flex items-center justify-between mb-8">
                 <h3 class="font-bold text-xl flex items-center gap-2">
                   <mat-icon>schedule</mat-icon>
                   مواقيت الصلاة
                 </h3>
                 <span class="text-emerald-100 text-sm bg-black/20 px-3 py-1 rounded-full">مكة المكرمة</span>
               </div>
               
               <div class="space-y-4">
                 <div class="flex justify-between items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                   <span class="font-medium">الفجر</span>
                   <span class="font-mono text-lg">04:32</span>
                 </div>
                 <div class="flex justify-between items-center text-emerald-100 p-2">
                   <span class="font-medium">الشروق</span>
                   <span class="font-mono">05:54</span>
                 </div>
                 <div class="flex justify-between items-center text-emerald-100 p-2">
                   <span class="font-medium">الظهر</span>
                   <span class="font-mono">12:15</span>
                 </div>
                 <div class="flex justify-between items-center text-emerald-100 p-2">
                   <span class="font-medium">العصر</span>
                   <span class="font-mono">15:38</span>
                 </div>
                 <div class="flex justify-between items-center text-emerald-100 p-2">
                   <span class="font-medium">المغرب</span>
                   <span class="font-mono">18:35</span>
                 </div>
                 <div class="flex justify-between items-center text-emerald-100 p-2">
                   <span class="font-medium">العشاء</span>
                   <span class="font-mono">20:05</span>
                 </div>
               </div>
             </div>
          </div>

          <!-- Hadith of the day -->
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 group hover:shadow-md transition-shadow">
             <div class="flex items-center gap-2 text-emerald-600 font-bold mb-6">
              <mat-icon>menu_book</mat-icon>
              حديث اليوم
            </div>
            <p class="font-amiri text-2xl leading-relaxed text-stone-700 mb-6">
              قال رسول الله ﷺ: "من سلك طريقًا يلتمس فيه علمًا، سهّل الله له به طريقًا إلى الجنة".
            </p>
            <div class="text-stone-500 font-medium text-sm">رواه مسلم</div>
          </div>

          <!-- Dua of the day -->
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 md:col-span-2 group hover:shadow-md transition-shadow">
            <div class="flex items-center gap-2 text-emerald-600 font-bold mb-6">
              <mat-icon>favorite</mat-icon>
              دعاء اليوم
            </div>
            <p class="font-amiri text-3xl sm:text-4xl leading-relaxed text-stone-800 mb-6 text-center">
              "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا"
            </p>
            <div class="text-stone-500 font-medium text-center text-sm">رواه ابن ماجه</div>
          </div>

        </div>
      </section>
    </main>
    
    <!-- Footer -->
    <footer class="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2 text-white">
          <mat-icon>mosque</mat-icon>
          <span class="text-xl font-bold">هدى</span>
        </div>
        <p>جميع الحقوق محفوظة &copy; 2026 هدى للمحتوى الإسلامي الموثوق.</p>
      </div>
    </footer>
  `
})
export class Home {}
