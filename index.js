module.exports = async function getPackage(package) {
  const res = await fetch(`https://pypi.org/pypi/${package}/json`);
  return res.json().info;
};