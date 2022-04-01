const expect = require('chai').expect;

// https://leetcode.com/problems/binary-search/

const search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return mid;

		if (nums[mid] > target) right = mid - 1;
		else left = mid + 1;
	}

	return -1;
};

it('Example 1', () => expect(search([-1, 0, 3, 5, 9, 12], 9)).to.equal(4));

it('Example 2', () => expect(search([-1, 0, 3, 5, 9, 12], 2)).to.equal(-1));
