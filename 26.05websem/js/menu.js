<script>
  // Получаем все ссылки с классом "item_link"
  const links = document.querySelectorAll('.item_link');

  // Обходим полученный массив ссылок циклом
  for (let i = 0; i < links.length; i++) {
    // Для каждой ссылки добавляем обработчик клика
    links[i].addEventListener('click', function(event) {
      // Отменяем стандартное поведение ссылки (переход по адресу href)
      event.preventDefault();

      // Получаем номер задачи из текста ссылки
      const taskNumber = parseInt(this.textContent);

      // Формируем имя файла с задачей
      const fileName = `task${taskNumber}.js`;

      // Загружаем скрипт с задачей
      const script = document.createElement('script');
      script.src = fileName;

      // Добавляем скрипт на страницу
      document.body.appendChild(script);
    });
  }
</script>