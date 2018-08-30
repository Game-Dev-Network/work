(function() {

	var renewalPeriod = {
		UVP: 2,
		PVP: 4,
		LFWP: 8
	}

	var renewalDay = 7; // 1 is Monday, 7 is Sunday

	function getNextInstanceOfDay(currentDate, day) {
		return currentDate.isoWeekday() <= day ?
			currentDate.isoWeekday(day) :
			currentDate.add(1, 'weeks').isoWeekday(day);
	}

	function calculateDate(weeks) {
		var currentDate = moment.utc();
		var endOfWeek = getNextInstanceOfDay(currentDate, renewalDay);

		return endOfWeek.add(weeks, 'weeks');
	}

	function changeListener(e) {
    var selectedOption = $('select option:selected')[0].value;

		var date = calculateDate(renewalPeriod[selectedOption]);

		$('#PRD').val(date.format('YYYY-MM-DD')) // Needs formatting

  }


  $(document).ready(function() {
    $('select').formSelect();

		$('#postingType').change($.proxy(changeListener, this));

		changeListener();
  });
})();
