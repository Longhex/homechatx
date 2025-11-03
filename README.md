⭐ SUPPORT THE PROJECT WITH A STAR — IT REALLY HELPS! ⭐

---

# SaaS & Startup Astro & Tailwind CSS Template

## License

This template is open-source software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0). You are free to fork, modify, and use it in your projects.

## Attribution

Originally created by Michael Andreuzza. Modified, extended, and redistributed by Bektur Aslan with added sections and updated UI/UX for broader usage.

## This template is using Tailwind CSS V4

Now we are using only a CSS file. It's called `global.css` and it's located in the src/styles folder. Now we are eimporting Tailwind CSS on the same file instead of using the `tailwind.config.cjs` file. Like this:

```css
// Importing Tailwind CSS
@import "tailwindcss";
// Importing Tailwind plugins
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

Then to add your styles you will use the @theme directive. Like this:

```css
@theme {
  /* Your CSS goes here, see how styles are written on the global.css file */
}
```

Remember this is just in Alpha version, so you can use it as you want. Just keep an eye on the changes that Tailwind CSS is going to make.

## Template Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Want to learn more?

Feel free to check Astro's [documentation](https://docs.astro.build)

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bekturaslan/syntro-astro)

---
Maintained & updated by Bektur Aslan. Contributions welcome.
# oriagent-home

Chạy: npm run dev      

git init                               
git remote add origin https://github.com/username/repo.git 
git add .                             
git commit -m "Initial commit"       
git branch -M main                      
git push -u origin main  

git init

# Bước 3: Kết nối với repo GitHub
git remote add origin https://github.com/Longhex/ahive.global.git

# Bước 4: Thêm toàn bộ file vào staging
git add .

# Bước 5: Commit lần đầu
git commit -m "Initial push to ahive.global"

# Bước 6: Đẩy code lên nhánh chính (main hoặc master)
git push -u origin master









🚀 CÁC BƯỚC ĐẨY CODE CÓ SẴN LÊN GITHUB (KHÔNG CLONE)
🧩 1. Khởi tạo Git trong thư mục code

Mở Terminal tại thư mục dự án của anh:

cd /đường_dẫn_tới_thư_mục_code


Nếu thư mục chưa có Git:

git init

🔗 2. Kết nối tới repo GitHub

Thêm remote origin trỏ tới repo của anh:

git remote add origin https://github.com/Longhex/homechatx.git


Nếu đã có remote trước đó và muốn đổi:

git remote set-url origin https://github.com/Longhex/homechatx.git

📝 3. Commit toàn bộ code hiện tại
git add .
git commit -m "initial commit or update project"

🚀 4. Push code lên branch chính (ví dụ main)

Nếu repo GitHub mới hoặc chưa có gì, anh có thể push thẳng:

git branch -M main
git push -u origin main

⚠️ Nếu repo trên GitHub đã có code trước đó

Và anh muốn ghi đè hoàn toàn bằng code local (cẩn thận):

git push origin main --force


Nếu Git báo lỗi do khác lịch sử (fatal: refusing to merge unrelated histories), thêm flag này:

git push origin main --force --allow-unrelated-histories

✅ Xong rồi anh có thể kiểm tra lại:
git remote -v


để đảm bảo đang push đúng repo homechatx.